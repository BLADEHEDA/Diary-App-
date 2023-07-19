import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import DiaryItem from '../Home/DiaryItem';
import HomeHeader from '../Home/HomeHeader';
import Search from '../Home/Search';
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import book from "../../assets/pic1.png"

interface DiaryEntry {
  id: string;
  category: string;
  description: string;
  selectedFile: string;
  date: string;
  isPublic: boolean;
}

const Home = () => {
  const [diary, setDiary] = useState<DiaryEntry[]>([]);
  // subjected to changes 
  // States for the handle search functionality 
  const [filteredDiary, setFilteredDiary] = useState<DiaryEntry[]>([]);

  const fetchPost = async () => {
    await getDocs(collection(db, 'diaryEntries')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() } as DiaryEntry));
      setDiary(newData);
      setFilteredDiary(newData);
      console.log(newData);
    });
  };
  
  useEffect(() => {
    fetchPost();
  }, []);
  // handle the search functionality 
  const handleSearch = (searchText: string) => {
    // filter the data 
    const filteredData = diary.filter(
      (item) =>
        // make sure all the texts are considered
        item.category.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDiary(filteredData);
  };

  return (
    <main className="bg-[white] mb-[3em] ">
      <Navbar head="Home" vector={localStorage.getItem('pic')} />
      <section className="px-3">
        <HomeHeader />
        <Search onSearch={handleSearch} />
        {filteredDiary.map((item) => (
          <DiaryItem
            key={item.id}
            src={item.selectedFile || book}
            title={item.category}
            date={item.date}
            type={item.isPublic ? 'Public' : 'Private'}
            content={item.description}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;

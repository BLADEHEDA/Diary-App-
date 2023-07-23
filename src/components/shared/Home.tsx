import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import DiaryItem from '../Home/DiaryItem';
import HomeHeader from '../Home/HomeHeader';
import Search from './Search';
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import book from "../../assets/pic1.png"
import MoonLoader from "react-spinners/ClipLoader";
// define the types to be used 
interface DiaryEntry {
  id: string;
  category: string;
  description: string;
  selectedFile: string;
  date: string;
  isPublic: boolean;
  Startdate
  : string; 
}

const Home = () => {
  const [diary, setDiary] = useState<DiaryEntry[]>([]); 
  // States for the handle search functionality  and filter 
  const [filteredDiary, setFilteredDiary] = useState<DiaryEntry[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const fetchPost = async () => {
    await getDocs(collection(db, 'diaryEntries')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(),
        id: doc.id,
        Startdate: doc.data().timestamp , // Convert timestamp to a human-readable format
      } as DiaryEntry));
      // fetchImage();
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
    // pass the staet of the category to that of the search 
    setSelectedCategory(searchText);      
    // filter the data 
    const filteredData = diary.filter(
      (item) =>
        // make sure all the texts are considered
        item.category.toLowerCase().includes(searchText.toLowerCase()) ||
        item.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDiary(filteredData);
    setSelectedCategory(selectedCategory)
  };
  // display data  when  fetching from the Api 
  if(diary.length===0){
    return(
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-0">
         <MoonLoader color="black"  size={100} />
      </div>
    ) 
    } 

  return (
    <main className="bg-[white] mb-[3em] ">
      <Navbar head="Home" vector={localStorage.getItem('pic')} />
      <section className="px-3">
        <HomeHeader />
        <Search onSearch={handleSearch} onCategorySelect={handleSearch} />
        {filteredDiary.map((item) => (
          <DiaryItem
            key={item.id}
            src={item.selectedFile || book}
            title={item.category}
            date={item.date}
            type={item.isPublic ? 'Public' : 'Private'}
            content={item.description}
            timestamp={item.Startdate} // Render the timestamp
            // Startdate={item.Startdate}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;

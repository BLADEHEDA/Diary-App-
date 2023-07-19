import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import DiaryItem from '../Home/DiaryItem';
import HomeHeader from '../Home/HomeHeader';
import Search from '../Home/Search';
import { db } from '../../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import book from "../../assets/pic1.png"

const Home = () => {
  const [diary, setDiary] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, 'diaryEntries')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setDiary(newData);
      console.log(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <main className="bg-[white] mb-[3em] ">
     
        <Navbar head="Home" vector={localStorage.getItem('pic')} />
        <section className='px-3' >
        <HomeHeader />
        <Search />
        {diary.map((item) => (
          <DiaryItem
            key={item.id}
            src={item.selectedFile ||  book } // Set the default image source here
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

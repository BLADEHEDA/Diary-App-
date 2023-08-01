import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import DiaryItem from '../Home/DiaryItem';
import HomeHeader from '../Home/HomeHeader';
import Search from './Search';  
import { db } from '../../firebase/firebase';
import { collection, getDocs,updateDoc,doc,deleteDoc} from 'firebase/firestore';
import book from "../../assets/pic2.png"
import MoonLoader from "react-spinners/ClipLoader";
import vactor from "../../assets/Vector.png"
// define the types to be used 
export interface DiaryEntry {
  id: string;
  category: string;
  description: string;
  selectedFile: string;
  isPublic: boolean;
  date: { seconds: number; nanoseconds: number };
  serverTimestamp: number | null; // Add serverTimestamp property to the DiaryEntry interface
}


const Home = () => {
  const [diary, setDiary] = useState<DiaryEntry[]>([]);
  // States for the handle search functionality  and filter z
  const [filteredDiary, setFilteredDiary] = useState<DiaryEntry[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  // fetch the data from firestore 
  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'diaryEntries'));
      const newData: DiaryEntry[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const serverTimestamp = data.date ? data.date.seconds * 1000 : null;

        return {
          id: doc.id,
          category: data.category,
          description: data.description,
          selectedFile: data.selectedFile,
          isPublic: data.isPublic,
          date: data.date,
          serverTimestamp: serverTimestamp,
        };
      });
      setDiary(newData);
      console.log('here is the data from the firestore ', newData);
      setFilteredDiary(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchPost();
  }, []);
    // Function to format the timestamp to "23 June 2023 @ 10:20" format
    const formatTimestamp = (timestamp: number | null): string => {
  if (!timestamp) return '';

  const date = new Date(timestamp);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December',
  ];

  const formattedDate = `${day} ${months[monthIndex]} ${year} @ ${hours}:${minutes.toString().padStart(2, '0')}`;
  return formattedDate;
};

  
    // Create a function to update the Firestore document with the new privacy status
    const updateDiaryPrivacyStatus = async (id: string, isPublic: boolean) => {
      try {

        const docRef = doc(db, 'diaryEntries', id); // Assuming 'diaryEntries' is the collection name
        await updateDoc(docRef, { isPublic }); // Update the 'isPublic' field in Firestore
      } catch (error) {
        console.error('Error updating privacy status:', error);
      }
    }; 

  // Handle the privacy toggle callback
    const handlePrivacyToggle = async (id: string, isPublic: boolean) => {
    // Update the diary array with the new privacy status
    const updatedDiary = diary.map((item) =>
      item.id === id ? { ...item, isPublic } : item
    );
    setDiary(updatedDiary);
    console.log('successful update');
    
       // Update the Firestore document with the new privacy status
       await updateDiaryPrivacyStatus(id, isPublic);
  };

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
  // Create a function to delete the diary item from Firestore
  const deleteDiaryItem = async (id: string) => {
    try {
      const docRef = doc(db, 'diaryEntries', id);
      await deleteDoc(docRef);
      // After successful deletion, update the state to remove the deleted item
      setDiary((prevDiary) => prevDiary.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting diary item:', error);
    }
  };
// callback fxn to receive stae as prop from  child componenr 
const getfilterdData = (filterData: DiaryEntry[]) => {
  console.log('state gotten from grandChild to grandParent:', filterData);
  setFilteredDiary(filterData);
};

  
  // display loader while fetching from the Api 
   if (diary.length===0){
      return(
        <main className="bg-[white] mb-[3em] ">
          <Navbar head="New entry" vector={localStorage.getItem('pic') || vactor} />
          <section className="px-3">
            <HomeHeader />
            <Search onSearch={handleSearch}  diary={diary}
            onFiltered={getfilterdData}
            />
            
          <div className="fixed inset-0 flex justify-center items-center 
          z-50 bg-black bg-opacity-0 text-[red]">
          <MoonLoader color="black"  size={100} />
        </div>
          </section>
        </main>
      )
    }
  return (
    <main className="bg-[white] mb-[3em] ">
    {/* conditionally display a default image in case of logged  */}
      <Navbar head="New entry" vector={localStorage.getItem('pic') || vactor} />
      <section className="px-3">
        <HomeHeader />
        <Search onSearch={handleSearch} diary={diary}
        onFiltered={getfilterdData}
        />
        { filteredDiary.length===0 ?(
         <div className="flex justify-center items-center h-[400px] text-2xl font-bold">
         NO RESULTS
        </div>
        ):(
        filteredDiary.map((item) => (
          <DiaryItem
          key={item.id}
          src={item.selectedFile || book}
          title={item.category}
          type={item.isPublic ? 'Public' : 'Private'}
          content={item.description}
          timestamp={formatTimestamp(item.serverTimestamp)} // Use the formatted timestamp
          id={item.id} // Pass the unique ID of the diary item
          isPublic={item.isPublic} // Pass the current privacy status
          onPrivacyToggle={handlePrivacyToggle} // Pass the callback function to handle the toggle
          onDeleteDiaryItem={deleteDiaryItem} // Pass the function to handle deletion
        />
            ))
            )}
      </section>
    </main>
  );
};

export default Home;
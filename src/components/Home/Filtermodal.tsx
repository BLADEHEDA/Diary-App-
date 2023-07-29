import React, { useState } from "react";
import { DiaryEntry } from "../shared/Home"; 

type FiltermodalProps = {
  onClose: () => void;
  diary: DiaryEntry[]; // Change the type to an array of DiaryEntry
  onFilter: (filteredData: DiaryEntry[]) => void; // Add the onFilter prop
};
const Filtermodal: React.FC<FiltermodalProps> = ({ onClose,diary,
  onFilter
 }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("All");
  const [filtered, setFiltered] = useState<DiaryEntry[]>(diary); // Use DiaryEntry[] as the type

  const handleFilter = () => {

      const filteredDiaries = diary.filter((filteredEntry) => filteredEntry.category.trim() === category.trim());
      if( filteredDiaries.length ===0 ){
        console.log('No Results',filtered);
        onFilter(filteredDiaries) 
      }
      else{
        setFiltered(filteredDiaries)        
        console.log('Filterd data ', filteredDiaries);
        onFilter(filteredDiaries) 
      }
      // onFilter(filtered) 
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Category:", category);
    console.log('diary state ', diary );
    
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white pb-8 h-full  rounded shadow-lg absolute top-0 right-0">
        <div className="bg-[black] text-[white]  text-2xl font-[700] pl-5 py-3  mb-5 ">
            Filter
        </div>
        <div className="px-5 "> 
        <h2 className="text-black text-[1.5em] font-bold mb-6 ">Filter your diary entries</h2>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-5">
            <label htmlFor="category" className="text-black text-[1.2em] italic ">
              Category
            </label>
            <select
              id="category"
              className="w-full border border-black rounded px-2 py-3 bg.[white]  "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="hidden" value="All">Categories</option>
              <option value="Fun">Fun</option>
              <option value="Home">Home</option>
              <option value="Family">Family</option>
              <option value="Health">Health</option>
              <option value="School">School</option>
              <option value="Work">Work</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="startDate" className="text-black text-[1.2em] italic">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="w-full border border-black rounded px-2 py-2"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="endDate" className="text-black text-[1.2em] italic">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="w-full border border-black rounded px-2 py-2"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button
            className="bg-black text-white px-4 py-4 mt-3 rounded"
            onClick={handleFilter}
          >
            Filter
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Filtermodal;
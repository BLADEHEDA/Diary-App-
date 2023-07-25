import React, { useState } from "react";

type FiltermodalProps = {
  onClose: () => void;
};

const Filtermodal: React.FC<FiltermodalProps> = ({ onClose }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [category, setCategory] = useState("All");

  const handleFilter = () => {
    // Implement your filtering logic here based on the selected options
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Category:", category);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4">
        <h2 className="text-black text-xl font-bold mb-6">Filter your diary entries</h2>
        <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label htmlFor="category" className="text-black font-semibold">
              Category
            </label>
            <select
              id="category"
              className="w-full border border-black rounded px-2 py-1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Fun">Fun</option>
              <option value="Home">Home</option>
              <option value="Family">Family</option>
              <option value="Health">Health</option>
              <option value="School">School</option>
              <option value="Work">Work</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="startDate" className="text-black font-semibold">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="w-full border border-black rounded px-2 py-1"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endDate" className="text-black font-semibold">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="w-full border border-black rounded px-2 py-1"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <button
            className="bg-black text-white px-4 py-2 rounded"
            onClick={handleFilter}
          >
            Filter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filtermodal;

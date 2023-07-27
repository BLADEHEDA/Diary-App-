import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import Filtermodal from '../Home/Filtermodal';

// Define the data  types 
interface SearchProps {
  onSearch: (searchText: string) => void;
  onCategorySelect: (category: string) => void; // Add the new prop to handle category selection
}

const Search: React.FC<SearchProps> = ({ onSearch,onCategorySelect,diary}) => {
  const [searchText, setSearchText] = useState('');
  const [ show , setShow ]= useState(false);
  // State to control Filtermodal
  const [showFilterModal, setShowFilterModal] = useState(false); 

// track the input changes of the search input field and updaye the states 
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
    // onSearch(value); //pass the value to the parent component where the component is reused
  };
// defin the funvtion to handle the search functionality 
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchText);
  };
  //handle the hide and show of the categories 
  const handleShow=()=>{
    setShow(!show);
  }
  // handle the select category filter
  const handleShowFilterModal = () => {
    // console.log('diaryEntry states:', diary);
    
    setShowFilterModal(true);

  };

  // definethe function to handel the filter by category 
  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
    setShow(false);
    // the logic to search filter the data from the Api would get it nhere , 
  };

  return (
    <main>
      <section className="flex justify-between px-3 mt-5 mb-1">
        <form onSubmit={handleSearch} className="bg-[white] flex   ">
          <div> 
          <input
            type="text"
            className="bg-[white] input  pl-2 focus:outline-none "
            placeholder="Type here to search"
            value={searchText}
            onChange={handleInputChange}
          />
          </div>
          {/* <div className="" onSubmit={handleSearch}> */}
            <button className="p-0 bg-[white] btn  "> 
            <FontAwesomeIcon className="text-[1.4em]" icon={faSearch} />  
            </button>
        {/* </div> */}
        </form>
       <section className='flex' >  
        <div className="" onClick={handleShow} >
          <FontAwesomeIcon className="text-[1.4em]" icon={faFilter} />
        </div>
        {/* second filter */}
        <div className="" onClick={handleShowFilterModal}  >
          <FontAwesomeIcon className="text-[1.4em]" icon={faFilter} />
        </div>
    {/* hide and show the categories involved  */}
        { show  &&  
        <div className=" options absolute top-[11em] right-[1em]  pl-2 pr-5 bg-[white] z-[999] font-[500]  ">
          <div className="option cursor-pointer " onClick={() => handleCategorySelect('Fun')}>Fun</div>
          <div className="option cursor-pointer " onClick={() => handleCategorySelect('Home')}>Home</div>
          <div className="option cursor-pointer" onClick={() => handleCategorySelect('Family')}>Family</div>
          <div className="option cursor-pointer" onClick={() => handleCategorySelect('Spiritual')}>Spiritual</div>
          <div className="option cursor-pointer" onClick={() => handleCategorySelect('Health')}>Health</div>
          <div className="option cursor-pointer" onClick={() => handleCategorySelect('Work')}>Work</div>
          <div className="option cursor-pointer" onClick={() => handleCategorySelect('others')}>Others</div>
        </div>
        }
        {/* hide and show the select category filter modal */}
        {showFilterModal && <Filtermodal onClose={() => setShowFilterModal(false)} diary={diary} />}
            </section>
      </section>
      <div className="border-b mx-3 border-[black] mb-5"></div>
    </main>
  );
};

export default Search;
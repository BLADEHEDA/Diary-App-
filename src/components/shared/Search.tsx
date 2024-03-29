import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import Filtermodal from '../Home/Filtermodal';
import { DiaryEntry } from './Home';

interface SearchProps {
  onSearch: (searchText: string) => void;
  diary: DiaryEntry[]; // Add the diary prop with the correct type
  onFiltered: (data: DiaryEntry[]) => void; // Add the new prop to handle category selection
}

const Search: React.FC<SearchProps> = ({ onSearch,diary,onFiltered}) => {
  const [searchText, setSearchText] = useState('');
  // State to control Filtermodal
  const [showFilterModal, setShowFilterModal] = useState(false); 

// track the input changes of the search input field and updaye the states 
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
  };
// define the to get the states from the the parent coponet 
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchText);
  };
  // handle the select category filter
  const handleShowFilterModal = () => {
    setShowFilterModal(true);
  };
// create a function ot get states from the child component 
const getFiltered = (data: DiaryEntry[]) => {
console.log('gotten from  FilterModal ,child component ' , data);
// Send this data to the parent compoonent (Home)
onFiltered(data)
  }

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
        <div className="" onClick={handleShowFilterModal}  >
          <FontAwesomeIcon className="text-[1.4em]" icon={faFilter} />
        </div>
        {/* hide and show the select category filter modal */}
        {showFilterModal && <Filtermodal onClose={() => setShowFilterModal(false)} 
        diary={diary}
        // subjected to changes 
        onFilter={getFiltered}
        />}
            </section>
      </section>
      <div className="border-b mx-3 border-[black] mb-5"></div>
    </main>
  );
};

export default Search;
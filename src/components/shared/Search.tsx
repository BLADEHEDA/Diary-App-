import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

// Define the types
interface SearchProps {
  onSearch: (searchText: string) => void;
  onCategorySelect: (category: string) => void; // Add the new prop to handle category selection
}

const Search: React.FC<SearchProps> = ({ onSearch,onCategorySelect}) => {
  const [searchText, setSearchText] = useState('');
  const [ show , setShow ]= useState(false);


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
  // definethe function to handel the filter by category 
  const handleCategorySelect = (category: string) => {
    onCategorySelect(category);
    setShow(false);
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
    {/* hide and show the categories involved  */}
        { show  &&  
        <div className=" options absolute top-[11em] right-[1em]  pl-2 pr-5 bg-[white] z-[999] font-[500]  ">
          <div className="option" onClick={() => handleCategorySelect('Fun')}>Fun</div>
          <div className="option" onClick={() => handleCategorySelect('Home')}>Home</div>
          <div className="option" onClick={() => handleCategorySelect('Family')}>Family</div>
          <div className="option" onClick={() => handleCategorySelect('Spiritual')}>Spiritual</div>
          <div className="option" onClick={() => handleCategorySelect('Health')}>Health</div>
          <div className="option" onClick={() => handleCategorySelect('Work')}>Work</div>
          <div className="option" onClick={() => handleCategorySelect('others')}>Others</div>
        </div>
        }
            </section>

      </section>
      <div className="border-b mx-3 border-[black] mb-5"></div>
    </main>
  );
};

export default Search;

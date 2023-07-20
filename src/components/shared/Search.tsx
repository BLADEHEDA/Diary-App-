import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

// Define the types
interface SearchProps {
  onSearch: (searchText: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch,}) => {
  const [searchText, setSearchText] = useState('');
  const [ show , setShow ]= useState(false);

  const handleShow=()=>{
    setShow(!show);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
    // onSearch(value); //pass the value to the parent component where the component is reused
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchText);
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

        { show  &&  
        <div className="options absolute top-[11em] right-[1em]  px-2 bg-[white] z-[999] font-[500]  ">
          <div className="">Fun</div>
          <div className="">Home</div>
          <div className="">Family</div>
          <div className="">Spiritual</div>
          <div className="">Health</div>
          <div className="">Work</div>
          <div className="">Others</div>
        </div>
        }
        {/* <select
              className="w-[30px] h-[1px] border-[0.2px] px-2 py-4 text-black text-[1em] 
              rounded-[5px] border-black border-solid"
              name="Category"
              placeholder="Category"
            >
              <option className=""></option>
              <option value="Fun">Fun</option>
              <option value="Home">Home</option>
              <option value="Family">Family</option>
              <option value="Spiritual">Spiritual</option>
              <option value="Health">Health</option>
              <option value="School">School</option>
              <option value="Work">Work</option>
              <option value="Others">Others</option>
            </select> */}
            </section>

      </section>
      <div className="border-b mx-3 border-[black] mb-5"></div>
    </main>
  );
};

export default Search;

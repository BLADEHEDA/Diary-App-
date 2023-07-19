import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

// Define the types 
interface SearchProps {
  onSearch: (searchText: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

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
        <form onSubmit={handleSearch}  className="bg-[white]">
          <input
            type="text"
            className="bg-[white] input text-red-600::placeholder"
            placeholder="Type here to search"
            value={searchText}
            onChange={handleInputChange}
          />
        </form>
        <div className="" onClick={handleSearch}>
          <FontAwesomeIcon className="text-[1.4em]" icon={faSearch} />
        </div>
        <div className="">
          <FontAwesomeIcon className="text-[1.4em]" icon={faFilter} />
        </div>
      </section>
      <div className="border-b mx-3 border-[black] mb-5"></div>
    </main>
  );
};

export default Search;

import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

interface SearchProps {
  onSearch: (searchText: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value);
    onSearch(value); // Pass the search text to the parent component
  };

  return (
    <main>
      <section className="flex justify-between px-3 mt-5 mb-1">
        <div className="bg-[white]">
          <input
            type="text"
            className="bg-[white] input text-red-600::placeholder"
            placeholder="Type here to search"
            value={searchText}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
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

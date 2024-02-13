import { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../../contexts/SearchContext';
import useDebounce from '../../hooks/useDebounce';
import CloseIcon from '../ui/CloseIcon';
import SearchIcon from '../ui/SearchIcon';

const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const [keyword, setKeyword] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (showSearchInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearchInput]);

  const handleIconClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearch = useDebounce((term) => {
    setSearchTerm(term);
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    handleSearch(value);
  };

  return (
    <div className="flex items-center h-10 gap-[1px] transition-all">
      {showSearchInput ? (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-56 transition-all"
        >
          <input
            ref={inputRef}
            value={keyword}
            onChange={handleChange}
            type="search"
            id="search-dropdown"
            className="z-20 block w-full px-4 py-2 text-white transition-all bg-gray-800 focus:outline-none"
            placeholder="Search News"
            required
          />
        </form>
      ) : (
        <div className="w-56 h-10 transition-all"></div>
      )}
      <button
        onClick={handleIconClick}
        className="h-full p-1 text-white transition-all bg-gray-200 rounded-e-lg"
      >
        {showSearchInput ? <CloseIcon /> : <SearchIcon />}
      </button>
    </div>
  );
};

export default Search;

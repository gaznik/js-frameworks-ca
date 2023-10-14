import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    onSearch(input); 
  };

  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchInput}
      onChange={handleSearchInputChange}
    />
  );
}

export default SearchBar;

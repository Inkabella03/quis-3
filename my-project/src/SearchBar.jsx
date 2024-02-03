// SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="container mx-auto">
        <input
          type="text"
          placeholder="Find your data that you need!"
          className="w-full p-2 rounded-md border border-gray-300"
        />
      </div>
    </div>
  );
};

export default SearchBar;

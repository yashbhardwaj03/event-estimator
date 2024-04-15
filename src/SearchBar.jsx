// components/SearchBar.jsx
import React from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="mr-2 mb-2 flex items-center">
  <div className="relative">
    <IoIosSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      placeholder="Search..."
      className="w-32 md:w-full pl-10 pr-4 py-1 border border-gray-400 rounded-xl focus:outline-none focus:border-black"
      onChange={(e) => onSearch(e.target.value)}
    />
  </div>
</div>

  );
};

export default SearchBar;

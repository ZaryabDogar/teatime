// components/Search.js
'use client'
import { IoSearch } from "react-icons/io5";
// components/Search.js

import { useState } from 'react';

const Search = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleSearch = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`relative transition-all duration-500 ease-in-out ${expanded ? 'md:w-[260px] w-[150px]' : 'w-[10px]'} text-greyText2`}>
      <input
        type="text"
        placeholder="Search..."
        className={`pl-4 md:py-3 py-2 w-full h-full rounded-xl  outline-none bg-black/5 transition-all duration-500 ease-in-out ${expanded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
      <div className="absolute md:-inset-y-[2px]  inset-y-[1px] -right-2">
      <button
        onClick={toggleSearch}
        className="md:px-3 md:py-3 px-2 py-2  bg-gray-200 hover:bg-gray-300 rounded-full"
      >
       <IoSearch className="text-greyText2 md:text-2xl text-xl" />
      </button></div>
    </div>
  );
};

export default Search;

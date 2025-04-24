import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex border border-gray-300 overflow-hidden w-full sm:w-[250px] md:w-[400px]">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-20 py-1 text-gray-600 outline-none text-center placeholder:text-center sm:text-left sm:placeholder:text-left"
      />
      <button className="bg-gray-700 text-white px-6 flex items-center justify-center">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;

import React from 'react';
import IconButton from './IconButton';
import { SearchIcon } from '../assets/Icons';

const SearchBar = () => {
    return (
        <div
            className="flex items-center justify-center mx-auto rounded p-1 px-4 py-1 shadow-inner transition-colors duration-300 w-[400px] border border-gray-600 bg-transparent">
            <input 
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none placeholder-gray-500 px-2 flex-grow font-medium text-white"
            />
            <IconButton icon={SearchIcon} ariaLabel="Search" className="text-gray-400 ml-2" />
        </div>
    );
};

export default SearchBar;

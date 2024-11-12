import React from 'react';
import { SearchIcon, MoreIcon } from '../assets/Icons';
import hypercubeIcon from '../assets/Hypercube.svg';
import IconButton from './IconButton';
import MoreOptionsMenu from './MoreOptionsMenu';
import { themes } from '../config/theme';
import SearchBar from './SearchBar';

const NavBar = ({ theme }) => {
  const currentTheme = themes[theme.name];
  return (
    <nav className={`flex items-center h-12 px-4 w-full rounded-md shadow-md`} style={{ backgroundColor: currentTheme.colors.primaryBackground, color: currentTheme.colors.primaryText }}>

      {/* Logo */}
      <div className="mr-4">
        <img src={hypercubeIcon} alt="Logo" className="w-5 h-5" />
      </div>
    
      {/* Navigation Links */}
      <div className="flex space-x-4">
        <button
          style={{ color: currentTheme.colors.primaryText, backgroundColor: 'transparent' }}
          className="px-4 py-1 hover:text-blue-500 hover:bg-gray-700 rounded p-1 font-medium text-lg"
        >
          Following
        </button>
        <button
          style={{ color: currentTheme.colors.primaryText, backgroundColor: 'transparent' }}
          className="px-4 py-1 hover:text-blue-500 hover:bg-gray-700 rounded p-1 font-medium text-lg"
        >
          Theater Mode
        </button>
      </div>

      {/* Search Input */}
      <SearchBar />
      
      {/* Pushing rest of elements to the right */}
      <div className="flex-grow"></div>

      {/* Three Dots Icon */}
      <MoreOptionsMenu theme={theme} />

      {/* Login Button */}
      <button
        style={{ color: currentTheme.colors.primaryText, backgroundColor: 'transparent' }}
        className="px-4 py-1 hover:text-blue-500 hover:bg-gray-700 rounded p-1 font-medium text-lg"
      >
        Login
      </button>
    </nav>
  );
};

export default NavBar;

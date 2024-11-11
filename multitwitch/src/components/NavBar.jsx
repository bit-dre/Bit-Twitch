import React from 'react';
import { SearchIcon, MoreIcon } from '../assets/Icons';
import hypercubeIcon from '../assets/Hypercube.svg';
import IconButton from './IconButton';
import MoreOptionsMenu from './MoreOptionsMenu';
import { themes } from '../config/theme';

const NavBar = ({ theme }) => {
  const currentTheme = themes[theme.name];
  return (
    <nav className={`flex items-center h-12 px-4 w-full`} style={{ backgroundColor: currentTheme.colors.primaryBackground, color: currentTheme.colors.primaryText }}>

      {/* Logo */}
      <div className="mr-4">
        <img src={hypercubeIcon} alt="Logo" className="w-5 h-5" />
      </div>
    
      {/* Navigation Links */}
      <div className="flex space-x-4">
        <button
          style={{ color: currentTheme.colors.primaryText, backgroundColor: 'transparent' }}
          className="px-4 py-1 hover:text-blue-500 hover:bg-gray-700 rounded p-1 font-bold text-lg"
        >
          Following
        </button>
        <button
          style={{ color: currentTheme.colors.primaryText, backgroundColor: 'transparent' }}
          className="px-4 py-1 hover:text-blue-500 hover:bg-gray-700 rounded p-1 font-bold text-lg"
        >
          Theater Mode
        </button>
      </div>

      {/* Search Input */}
      <div
        style={{ backgroundColor: currentTheme.colors.secondaryBackground, borderColor: currentTheme.colors.borderDefault }}
        className="ml-4 flex items-center rounded p-1 px-3 py-1 shadow-inner transition-colors duration-300 w-[325px] border"
      >
        <input
          type="text"
          placeholder="Search"
          style={{ color: currentTheme.colors.primaryText }}
          className="bg-transparent outline-none placeholder-gray-500 px-2 flex-grow font-bold"
        />
        <IconButton icon={SearchIcon} ariaLabel="Search" className="text-gray-400 ml-2" />
      </div>

      {/* Pushing rest of elements to the right */}
      <div className="flex-grow"></div>

      {/* Three Dots Icon */}
      <MoreOptionsMenu theme={theme} />

      {/* Login Button */}
      <button
        style={{ color: currentTheme.colors.primaryText, backgroundColor: 'transparent' }}
        className="px-4 py-1 hover:text-blue-500 hover:bg-gray-700 rounded p-1 font-bold text-lg"
      >
        Login
      </button>
    </nav>
  );
};

export default NavBar;

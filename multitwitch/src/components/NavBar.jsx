import React from 'react';
import MoreOptionsMenu from './MoreOptionsMenu';
import SearchBar from './SearchBar';

const NavBar = ({ theme, onThemeToggle }) => {
  return (
    <nav className="flex items-center h-12 px-4 w-full rounded-md shadow-md bg-[var(--primary-background)] text-[var(--primary-text)]">

      {/* Logo */}
      <div className="mr-4">
      </div>
    
      {/* Navigation Links */}
      <div className="flex space-x-4">
        <button className="px-4 py-1 hover:text-[var(--secondary-text)] hover:bg-[var(--hover-background)] rounded-md font-medium text-lg bg-transparent">
          Following
        </button>
        <button className="px-4 py-1 hover:text-[var(--secondary-text)] hover:bg-[var(--hover-background)] rounded-md font-medium text-lg bg-transparent">
          Theater
        </button>
      </div>

      {/* Search Input */}
      <SearchBar />
      
      {/* Pushing rest of elements to the right */}
      <div className="flex-grow"></div>

      {/* Three Dots Icon */}
      <MoreOptionsMenu theme={theme} onThemeToggle={onThemeToggle} />

      {/* Login Button */}
      <button className="px-4 py-1 ml-2 hover:text-[var(--secondary-text)] hover:bg-[var(--hover-background)] rounded-md font-medium text-lg bg-transparent">
        Login
      </button>
    </nav>
  );
};

export default NavBar;

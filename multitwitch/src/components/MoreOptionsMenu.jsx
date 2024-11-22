import React, { useEffect, useState, useRef } from 'react';
import { MoreIcon, LanguageIcon, KeyboardIcon, SettingsIcon, InfoIcon, ChevronRightIcon, MoonIcon } from '../assets/Icons';
import IconButton from './IconButton';
import ThemeToggleButton from './ThemeToggleButton';
import { themes } from '../config/theme';
import MenuItem from './MenuItem';

const MoreOptionsMenu = ({ theme, onThemeToggle }) => {
  const currentTheme = themes[theme.name];
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      {/* More Options Button */}
      <IconButton
        icon={MoreIcon}
        ariaLabel="More options"
        onClick={toggleMenu}
        className="ml-4 mr-2 cursor-pointer hover:bg-[var(--hover-background)] rounded p-2 text-[var(--primary-text)]"
      />
      
      {/* Dropdown Menu */}
      {/* Conditional rendering the options menu, will be only executed when isOpen is true. Wont add any unnecessary clutter in the dom */}
      {isOpen && (
        <div
          className="bg-[var(--secondary-background)] origin-top-right absolute right-2 mt-2 w-48 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          {/* allowing padding for options */}
          <div className="px-2 py-1">  
          {/* Theme Option */}
            <div className="py-1" role="menu" area-orientation="vertical" aria-lavelledby="options-menu">
              <MenuItem 
                icon={MoonIcon}
                label='Theme'
                rightIcon={ThemeToggleButton}
                rightIconProps={{ theme: theme.name, onToggle: onThemeToggle, className: "w-8 h-4" }}
                noHover
              />
              <MenuItem 
                icon={LanguageIcon}
                label='Language'
                rightIcon={ChevronRightIcon}
                rightIconProps={{ className: "w-4 h-4"}}
              />
              <MenuItem 
                icon={KeyboardIcon}
                label='Keyboard Shortcuts'
              />
              <MenuItem 
                icon={SettingsIcon}
                label="Settings"
              />
              <hr className="w-40 mx-auto my-2 border-[var(--border-default)]" />
              <MenuItem
                icon={InfoIcon}
                label="Info"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreOptionsMenu;

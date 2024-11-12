import React from 'react';
import { MoreIcon, LanguageIcon, KeyboardIcon, SettingsIcon, InfoIcon, ChevronRightIcon, MoonIcon } from '../assets/Icons';
import IconButton from './IconButton';
import ThemeToggleButton from './ThemeToggleButton';
import { themes } from '../config/theme';

const MoreOptionsMenu = ({ theme, onThemeToggle }) => {
  const currentTheme = themes[theme.name];

  return (
    <div className="relative inline-block text-left">
      {/* More Options Button */}
      <IconButton
        icon={MoreIcon}
        ariaLabel="More options"
        className="ml-4 mr-2 cursor-pointer hover:bg-[var(--hoverBackground)] rounded p-2 text-gray-400"
      />
      
      {/* Dropdown Menu */}
      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-md bg-[${currentTheme.colors.secondaryBackground}] ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-[${currentTheme.colors.hoverBackground}] cursor-pointer" role="menuitem">
            <div className="flex items-center">
              <MoonIcon className="mr-2 w-5 h-5" />
              <span>Theme</span>
            </div>
            <ThemeToggleButton theme={theme.name} onToggle={onThemeToggle} className="w-8 h-4" />
          </div>
          <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-300 hover:bg-[${currentTheme.colors.hoverBackground}] cursor-pointer" role="menuitem">
            <div className="flex items-center">
              <LanguageIcon className="mr-2 w-5 h-5" />
              <span>Language</span>
            </div>
            <ChevronRightIcon className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[${currentTheme.colors.hoverBackground}] cursor-pointer" role="menuitem">
            <KeyboardIcon className="mr-2 w-5 h-5" />
            <span>Keyboard Shortcuts</span>
          </div>
          <div className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[${currentTheme.colors.hoverBackground}] cursor-pointer" role="menuitem">
            <SettingsIcon className="mr-2 w-5 h-5" />
            <span>Settings</span>
          </div>
          <hr className="w-40 mx-auto border-opacity-30 border-gray-600 my-2" />
          <div className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[${currentTheme.colors.hoverBackground}] cursor-pointer" role="menuitem">
            <InfoIcon className="mr-2 w-5 h-5" />
            <span>Info</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreOptionsMenu;

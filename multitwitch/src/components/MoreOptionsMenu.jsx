import React from 'react';
import { MoreIcon, LanguageIcon, KeyboardIcon, SettingsIcon, InfoIcon } from '../assets/Icons';
import IconButton from './IconButton';
import { themes } from '../config/theme';

const MoreOptionsMenu = ({ theme }) => {
    const currentTheme = themes[theme.name];
    return (
        <div className='relative inline-block text-left'>
            {/* More Options Button */}
            <IconButton 
                icon={MoreIcon}
                ariaLabel='More options'
                className='ml-4 mr-2 cursor-pointer hover:bg[var(--hoverBackground)] rounded p-2 text-gray-400'
            />
            {/* Dropdown menu */}
            <div className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[${currentTheme.colors.secondaryBackground}] ring-1 ring-black ring-opacity-5 focus:outline-none'>
                <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                    <div 
                        className='flex items-center px-4 py-2 text-sm text-gray-300 hover:bg[[${currentTheme.colors.hoverBackground}] cursor-pointer' 
                        role='menuitem'
                    >   
                        <LanguageIcon className='mr-3 text-lg'/>
                        Language
                    </div>
                    <div className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[${currentTheme.colors.hoverBackground}] cursor-pointer" role="menuitem">
                        <KeyboardIcon className="mr-3 text-lg" />
                        Keyboard Shortcuts
                    </div>
                    <div className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[${currentTheme.colors.hoverBackground}] cursor-pointer" role="menuitem">
                        <SettingsIcon className="mr-3 text-lg" />
                        Settings
                    </div>
                    <hr className="border-t border-gray-600 my-2" />
                    <div className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[${currentTheme.colors.hoverBackground}] cursor-pointer" role="menuitem">
                        <InfoIcon className="mr-3 text-lg" />
                        Info
                    </div>
                </div>
            </div>
        </div>
  );
};

export default MoreOptionsMenu;
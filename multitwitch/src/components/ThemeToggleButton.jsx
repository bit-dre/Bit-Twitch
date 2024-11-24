import React from 'react';
import { SunIcon, MoonIcon } from '../assets/Icons';

const ThemeToggleButton = ({ theme, onToggle }) => {
  const isLightMode = theme === 'light';

  return (
    <div
      className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 ${
        isLightMode ? 'bg-blue-500' : 'bg-[var(--primary-background)]'
      }`}
      onClick={onToggle}
    >
      <div
        className={`w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-500 transform ${
          isLightMode ? 'translate-x-4 bg-white' : 'translate-x-0 bg-[var(--secondary-background)]'
        }`}
      >
        {isLightMode ? (
          <SunIcon className="text-yellow-500" />
        ) : (
          <MoonIcon className="text-blue-300" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggleButton;

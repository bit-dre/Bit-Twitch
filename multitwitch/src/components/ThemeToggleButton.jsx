import React, { useState } from 'react';
import { SunIcon, MoonIcon } from '../assets/Icons';

const ThemeToggleButton = ({ theme, onToggle }) => {
    const [isLightMode, setIsLightMode] = useState(theme === 'light');

    const handleToggle = () => {
        setIsLightMode(!isLightMode);
        onToggle(isLightMode ? 'dark' : 'light');
    };

    return (
        <div
            className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
                isLightMode ? 'bg-purple-300' : 'bg-gray-800'
            }`}
            onClick={handleToggle}
        >
            <div 
                className={`w-4 h-4 rounded-full flex items-center justify-center transition-transform duration-300 transform ${
                    isLightMode ? 'translate-x-4 bg-white' : 'translate-x-0 bg-gray-700'
                }`}
            >
                {isLightMode ? (
                <SunIcon className="text-purple-600" />
                ) : (
                <MoonIcon className="text-purple-400" />
                )}
            </div>
        </div>
    );
};
export default ThemeToggleButton;
import './index.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Theater from './components/Theater';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to dark mode
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [theaterStreamers, setTheaterStreamers] = useState([
    'faxuty',
    'hydraszn',
    'lacy',
    'plaqueboymax',
  ]);

  const removeStreamer = (streamer) => {
    setTheaterStreamers((prevStreamers) =>
      prevStreamers.filter((s) => s !== streamer)
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--primary-background)] text-[var(--primary-text)]">
      <NavBar theme={isDarkMode ? 'dark' : 'light'} onThemeToggle={toggleTheme} />

      {/* Main Content Area */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          theme={isDarkMode ? 'dark' : 'light'}
          theaterStreamers={theaterStreamers}
          removeStreamer={removeStreamer}
        />

        {/* Theater */}
        <div className="flex-grow">
          <Theater streamers={theaterStreamers} />
        </div>
      </div>
    </div>
  );
};

export default App;

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

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // State with IDs to prevent re-render of all streams
  const [theaterStreamers, setTheaterStreamers] = useState([
    { id: 1, name: 'kaicenat' },
    { id: 2, name: 'npen' },
    { id: 3, name: 'aussieantics' },
    { id: 4, name: 'clix' },
  ]);

  const removeStreamer = (streamerId) => {
    setTheaterStreamers((prevStreamers) =>
      prevStreamers.filter((s) => s.id !== streamerId)
    );
  };

  const addStreamerToTheater = (streamer) => {
    setTheaterStreamers((prevStreamers) => {
      if (prevStreamers.some((s) => s.id === streamer.id)) {
        return prevStreamers; // Streamer already in the theater
      }
      return [...prevStreamers, streamer];
    });
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };
  return (
    <div className="min-h-screen flex flex-col bg-[var(--primary-background)] text-[var(--primary-text)]">
      <NavBar theme={isDarkMode ? 'dark' : 'light'} onThemeToggle={toggleTheme} />

      {/* Main Content Area */}
      <div className="flex flex-grow overflow-hidden" style={{ height: 'calc(100vh - 64px)' }}>
        {/* Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
          theaterStreamers={theaterStreamers}
          removeStreamer={removeStreamer}
          addStreamerToTheater={addStreamerToTheater}
        />

        {/* Theater */}
        <div className="flex-grow h-full">
          <Theater streamers={theaterStreamers} />
        </div>
      </div>
    </div>
  );
};

export default App;
import './index.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import Theater from './components/Theater';
import { themes } from './config/theme';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const currentTheme = isDarkMode ? themes.dark : themes.light;

  const [theaterStreamers, setTheaterStreamers] = useState([
    'aussieantics',
    'mrsavage',
    'mongraal',
    'kaicenat',
  ]);

  const removeStreamer = (streamer) => {
    setTheaterStreamers((prevStreamers) =>
      prevStreamers.filter((s) => s !== streamer)
    );
  };

  return (
    <div
      style={{
        background: currentTheme.colors.primaryBackground,
        color: currentTheme.colors.primaryText,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBar theme={currentTheme} />

      {/* Main Content Area */}
      <div style={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <Sidebar
          theme={currentTheme}
          theaterStreamers={theaterStreamers}
          removeStreamer={removeStreamer}
        />

        {/* Theater */}
        <div style={{ flexGrow: 1 }}>
          <Theater streamers={theaterStreamers} />
        </div>
      </div>
    </div>
  );
};

export default App;

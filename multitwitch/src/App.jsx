import './index.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { themes } from './config/theme';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Determine the current theme
  const currentTheme = isDarkMode ? themes.dark : themes.light;

  return (
    <div style={{ background: currentTheme.colors.primaryBackground, color: currentTheme.colors.primaryText, minHeight: '100vh' }}>
      <NavBar theme={currentTheme} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
    </div>
  );
};

export default App;

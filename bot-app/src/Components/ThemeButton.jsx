import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../index.css';
const ThemeButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkTheme(savedTheme === 'dark');
      setCSSVariables(savedTheme);
    }
  }, []);

  const setCSSVariables = (theme) => {
    const root = document.documentElement;

    if (theme === 'dark') {
      root.style.setProperty('--background-color', '#121212');
      root.style.setProperty('--font-color', 'white');
      root.style.setProperty('--primary-color', 'rgb(228, 242, 255)');
      root.style.setProperty('--navbar-color', '#121212');
      root.style.setProperty('--bot-message-color', '#2C2C2C');
      root.style.setProperty('--human-message-color', '#1F1F1F');
      root.style.setProperty('--border-color', 'white');
    } else {
      root.style.setProperty('--background-color', 'aliceblue');
      root.style.setProperty('--font-color', 'black');
      root.style.setProperty('--primary-color', 'rgb(228, 242, 255)');
      root.style.setProperty('--navbar-color', 'whitesmoke');
      root.style.setProperty('--bot-message-color', 'hsl(125, 74%, 79%)');
      root.style.setProperty('--human-message-color', '#4576ac');
    }
  };

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(!isDarkTheme);
    setCSSVariables(newTheme);
    localStorage.setItem('theme', newTheme);  
  };

  return (
    <div>
      <button 
        onClick={toggleTheme}
        aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer', paddingTop: "15px", paddingRight: "30px"}}
      >
        {isDarkTheme 
          ? <FaSun size={30} style={{ color: '#D3D3D3' }} />
          : <FaMoon size={30} style={{ color: '#000000' }} />
        }
      </button>
    </div>
  );
};

export default ThemeButton;

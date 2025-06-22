
import React, { Fragment } from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Fragment>
      <button
        style={{
          padding: '8px',
          border: '1px solid black',
          backgroundColor: theme === 'dark' ? '#1a202c' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000',
          cursor: 'pointer'
        }}
        onClick={toggleTheme}
      >
        Switch to {theme === 'light' ? 'dark' : 'light'}
      </button>
    </Fragment>
  );
};

export default ThemeToggle;



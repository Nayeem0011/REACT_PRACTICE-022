

import React, { Fragment } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Fragment>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        borderBottom: '1px solid gray',
        backgroundColor: theme === 'dark' ? '#2d3748' : '#f7fafc',
        color: theme === 'dark' ? '#fff' : '#000'
      }}>
        <h1>My App</h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: '8px 12px',
            backgroundColor: theme === 'dark' ? '#4a5568' : '#e2e8f0',
            color: theme === 'dark' ? '#fff' : '#000',
            border: '1px solid gray',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>
    </Fragment>
  );
};

export default Header;


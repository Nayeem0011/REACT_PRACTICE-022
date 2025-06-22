

import React from 'react';
import './App.css';
import Header from './components/Header';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  const appStyle = {
    backgroundColor: theme === 'dark' ? '#1a202c' : '#ffffff',
    color: theme === 'dark' ? '#ffffff' : '#1a202c',
    minHeight: '100vh',
    padding: '16px'
  };

  return (
    <>
      <div style={appStyle}>
        <Header />
        <main>
          <p>This is a {theme} themed app using React Context API.</p>
        </main>
      </div>
    </>
  );
}

export default App;

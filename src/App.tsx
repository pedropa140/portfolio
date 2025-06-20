import './App.css';

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './components/Portfolio/HomePage/HomePage.tsx';

function App() {
  const [darkMode, setdarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setdarkMode(prev => !prev);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathon from './components/Hackathon';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />      
      <Education />
      <Experience />
      <Projects />
      <Hackathon />
      <Contact />
      
    </div>
  );
}

export default App;

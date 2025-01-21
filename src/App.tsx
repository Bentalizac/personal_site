import React from 'react';
import Navbar from './components/navbar/NavBar';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import About from './pages/About';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='container'>
        <aside className='sidebar'>
            <About />
        </aside>
        <main className='main'>
            <Projects />
        </main>
        
    </div>
  );
};

export default App;

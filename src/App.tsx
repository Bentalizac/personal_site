import React from 'react';
import Projects from './pages/Projects';
import About from './pages/About';
import './App.css';
import HeaderBar from './components/navbar/HeaderBar';

const App: React.FC = () => {
  return (
    <div className='container'>
        <HeaderBar /> {/* The dark header bar */}
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

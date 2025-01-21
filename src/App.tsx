import React from 'react';
import Navbar from './components/navbar/NavBar';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

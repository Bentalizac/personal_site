import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>My Website</h1>
            <div style={styles.link}>
                <Link to="/" style={styles.link}> Home </Link>
                <Link to="/projects" style={styles.link}> Projects </Link>
                <Link to="/about" style={styles.link}> About Me </Link>
            </div>
        </nav>
    )
}

const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#333',
      color: '#fff',
    },
    title: {
      margin: 0,
    },
    links: {
      display: 'flex',
      gap: '1rem',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
    },
  };

export default Navbar
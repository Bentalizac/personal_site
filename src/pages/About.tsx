import React from 'react';
import "./pages.css"

const About: React.FC = () => {
  return (
    <div>
      <p className="title" >About Me</p>
      <hr className="titleLine" />
      <p>I'm a senior studying computer science at Brigham Young University.</p>
      <p className='links'>
      <a href="https://github.com/Bentalizac" target="_blank" rel="noopener noreferrer" className="github-link">
                    
                    GitHub Profile
                    <img 
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                        alt="GitHub Logo" 
                        className="github-icon"
                        />
                </a>
        <a href="https://www.linkedin.com/in/samuel-ellsworth-149094152/" target="_blank" rel="noopener noreferrer" className="github-link">
              LinkedIn Profile
        </a>
        <a href="https://leetcode.com/u/bentalizac/" target="_blank" rel="noopener noreferrer">
              LeetCode Profile
        </a>
      </p>
    </div>
  );
};

export default About;

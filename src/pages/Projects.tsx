import React from 'react';
import { personal_projects, school_projects } from '../config/projects';
import ProjectItem from '../components/projectItem/ProjectItem';
import '../App.css';

const Projects: React.FC = () => {
    return (
        <div className="projects-container">
            <div className="projects-column">
                <h2 className="title">Personal Projects:</h2>
                <hr className="titleLine" />
                <ul className="projectList">
                    {personal_projects.map((project) => (
                        <ProjectItem key={project.id} project={project} />
                    ))}
                </ul>
            </div>
            <div className="projects-column">
                <h2 className="title">School Projects:</h2>
                <hr className="titleLine" />
                <ul className="projectList">
                    {school_projects.map((project) => (
                        <ProjectItem key={project.id} project={project} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Projects;

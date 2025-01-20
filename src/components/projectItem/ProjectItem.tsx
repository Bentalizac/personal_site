import React, { JSX } from "react";
import { Project } from "../../config/projects";

interface ProjectItemProps {
    project: Project;
  }
  
const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    
    const github_link = (): JSX.Element | null => {
        return project.github_link ? (
            <p>
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                    View on Github
                </a>
            </p>
        ) : null;
    }

    const deployed_link = (): JSX.Element | null => {
        return project.active && project.deployed_link ? (
            <p>
                <a href={project.deployed_link} target="_blank" rel="noopener noreferrer">
                    View Deployed Project
                </a>
            </p>
        ) : null;
    }

    return (
        <li key={project.id} style={{ marginBottom: '1rem' }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {github_link()}
            {deployed_link()}
        </li>
    )
}

export default ProjectItem
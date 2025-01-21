import React, { JSX } from "react";
import { Project } from "../../config/projects";
import "./ProjectItem.css"
interface ProjectItemProps {
    project: Project;
  }
  
const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
    
    const github_link = (): JSX.Element | null => {
        return project.github_link ? (
            <p className="projectLinks">
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                    View on Github
                </a>
            </p>
        ) : null;
    }

    const deployed_link = (): JSX.Element | null => {
        return project.active && project.deployed_link ? (
            <p className="projectLinks">
                <a href={project.deployed_link} target="_blank" rel="noopener noreferrer">
                    View Deployed Project
                </a>
            </p>
        ) : null;
    }

    return (
        <li className="projectItem" key={project.id} style={{ marginBottom: '1rem' }}>
            <h4 className="projectTitle"> {project.name}</h4>
            <p className="description"> {project.description}</p>
            {github_link()}
            {deployed_link()}
        </li>
    )
}

export default ProjectItem
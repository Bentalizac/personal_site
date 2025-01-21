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
                <a href={project.github_link} target="_blank" rel="noopener noreferrer" className="github-link">
                    View on Github
                    <img 
                        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                        alt="GitHub Logo" 
                        className="github-icon"
                        />
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

    const title_line = (): JSX.Element => {
        return (
            <p>
                <h4 className="projectTitle"> {project.name}</h4>
                {project.construction && (
                <span className="wip-badge">WIP 🛠️ </span>
            )}
            </p>
        )
    }

    return (
        <li className="projectItem" key={project.id} style={{ marginBottom: '1rem' }}>
            {title_line()}
            
            <p className="description"> {project.description}</p>

            <hr className="subtitleLine" />
            <p className="subtitle">Links:</p>
            {github_link()}
            {deployed_link()}
        </li>
    )
}

export default ProjectItem
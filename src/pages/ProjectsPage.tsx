import React from 'react';
import { personal_projects, school_projects } from '../config/projects';
import ProjectItem from '../components/projectItem/ProjectItem';

const ProjectsPage: React.FC = () => {

    return (
        <div>
            <h2>
                Here are some of my personal projects:
            </h2>
            <ul>
                {personal_projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </ul>
            <h2>
                Here are some of my school projects:
            </h2>
            <ul>
                {school_projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </ul>
        </div>
    )
}

export default ProjectsPage
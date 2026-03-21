import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "./projectsData";

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <>
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    tools={project.tech}
                    image={project.image}
                    onClick={() => setSelectedProject(project)}
                />
            ))}
        </>
    );
}

export default Projects;
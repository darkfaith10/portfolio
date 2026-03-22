import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "./projectsData";
import "../styles/Projects.css";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="projects-section">

            <h2 className="projects-heading">Projects</h2>

            <div className="projects-grid">
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
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="project-overlay-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <motion.div
                            className="project-detail"
                            initial={{ scale: 0.9, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 50 }}
                        >

                            <button
                                className="close-btn"
                                onClick={() => setSelectedProject(null)}
                            >
                                ✕
                            </button>

                            <img src={selectedProject.image} />

                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>

                            <div className="project-tools">
                                {selectedProject.tech.map((t) => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>

                            <ul>
                                {selectedProject.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>

                            <div className="project-links">
                                {selectedProject.live && (
                                    <a href={selectedProject.live} target="_blank">Live</a>
                                )}
                                {selectedProject.github && (
                                    <a href={selectedProject.github} target="_blank">GitHub</a>
                                )}
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}

export default Projects;
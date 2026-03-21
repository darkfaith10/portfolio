import React from "react";
import "../styles/ProjectCard.css";

function ProjectCard({ title, description, tools, image, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>


      <div className="project-card-image-container">
        <img src={image} alt={title} />
      </div>


      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>

        <div className="project-card-tools">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>


      <div className="project-overlay">
        <p>View Details</p>
      </div>

    </div>
  );
}

export default ProjectCard;
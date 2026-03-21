import React from "react";
import "../styles/Skills.css";

function Skills() {
    const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "Tailwind"];
    const backendSkills = ["Node.js", "Python", "Express", "MongoDB"];
    const tools = ["Git", "GitHub", "VS Code", "Figma"]

    return (
        <>
            <div className="skills-section-main"> 

                <h2 className="skills-description-section">Skills</h2>

                <div className="skills-grid"> 

                    <div>
                        <h3 className="skills-title">Frontend</h3>
                        <ul>
                            {frontendSkills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="skills-title">Backend</h3>
                        <ul>
                            {backendSkills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="skills-title">Tools</h3>
                        <ul>
                            {tools.map((tool) => (
                                <li key={tool}>{tool}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills;
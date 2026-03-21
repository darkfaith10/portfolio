import React from "react";
import "../styles/About.css";
import { motion, useScroll, useTransform } from "framer-motion";

function About() {

    const { scrollY } = useScroll();

    const scene1 = useTransform(scrollY, [0, 800, 1000], [1, 1, 0]);
    const scene2 = useTransform(scrollY, [900, 1800, 2000], [0, 1, 0]);
    const scene3 = useTransform(scrollY, [1900, 2800, 3000], [0, 1, 1]);

    const y1 = useTransform(scrollY, [0, 600], [0, -50]);
    const y2 = useTransform(scrollY, [400, 1100], [50, -50]);
    const y3 = useTransform(scrollY, [1000, 1600], [50, 0]);


    return (
        <>
            <h2 className="about-heading">About Me</h2>
            <div className="about-container" style={{ position: "relative" }}>
                <div
                    className="about-sticky"
                >
                    <motion.section
                        className="about-description-section"
                        style={{ opacity: scene1, y: y1 }}
                    >
                        <div className="about-img">
                            <img src="/src/assets/coding_image.png" alt="coding" />
                        </div>
                        <div className="about-content">
                            <h3>I build modern web experiences</h3>
                            <p>I specialize in creating responsive and interactive web applications using React and modern JavaScript.
                                My focus is on writing clean, maintainable code while delivering smooth user experiences.</p>
                        </div>
                    </motion.section>

                    <motion.section
                        className="about-description-section"
                        style={{ opacity: scene2, y: y2 }}
                    >
                        <div className="about-img">
                            <img src="/src/assets/learning_image.png" alt="learning" />
                        </div>
                        <div className="about-content">
                            <h3>Always learning, always improving</h3>
                            <p>I continuously refine my skills by building real-world projects and exploring new technologies.
                                I believe growth comes from consistency, curiosity, and solving practical problems.</p>
                        </div>
                    </motion.section>

                    <motion.section
                        className="about-description-section"
                        style={{ opacity: scene3, y: y3 }}
                    >
                        <div className="about-img">
                            <img src="/src/assets/football_image.jpeg" alt="football" />
                        </div>
                        <div className="about-content">
                            <h3>More than just code</h3>
                            <p>Outside of development, I value discipline, teamwork, and consistency — qualities shaped through sports and personal challenges.</p>
                        </div>
                    </motion.section>

                </div>
            </div>
        </>
    );
}

export default About;
import React, { useRef } from "react";
import "../styles/About.css";
import { motion, useScroll, useTransform, useSpring, easeIn } from "framer-motion";

function About() {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20
    });

    const scene1 = useTransform(smoothProgress, [0, 0.25, 0.35], [1, 1, 0]);
    const scene2 = useTransform(smoothProgress, [0.30, 0.55, 0.65], [0, 1, 0]);
    const scene3 = useTransform(smoothProgress, [0.60, 0.85, 1], [0, 1, 1]);


    const y1 = useTransform(smoothProgress, [0, 0.3], [0, -50]);
    const y2 = useTransform(smoothProgress, [0.3, 0.6], [50, -50]);
    const y3 = useTransform(smoothProgress, [0.6, 1], [50, 0]);

    return (
        <>
            <motion.h2 transition={{ ease: "easeIn" }} className="about-heading">About Me . . .</motion.h2>

            <div ref={ref} className="about-container">
                <div className="about-sticky">

                    <motion.section
                        className="about-description-section"
                        style={{ opacity: scene1, y: y1 }}
                    >
                        <div className="about-img">
                            <img src="../public/coding_image.png" alt="coding" />
                        </div>
                        <div className="about-content">
                            <h3>I build modern web experiences</h3>
                            <p>
                                I specialize in creating responsive and interactive web applications using React and modern JavaScript.
                                My focus is on writing clean, maintainable code while delivering smooth user experiences.
                            </p>
                        </div>
                    </motion.section>

                    <motion.section
                        className="about-description-section"
                        style={{ opacity: scene2, y: y2 }}
                    >
                        <div className="about-img">
                            <img src="../public/learning_image.png" alt="learning" />
                        </div>
                        <div className="about-content">
                            <h3>Always learning, always improving</h3>
                            <p>
                                I continuously refine my skills by building real-world projects and exploring new technologies.
                                I believe growth comes from consistency, curiosity, and solving practical problems.
                            </p>
                        </div>
                    </motion.section>

                    <motion.section
                        className="about-description-section"
                        style={{ opacity: scene3, y: y3 }}
                    >
                        <div className="about-img">
                            <img src="../../public/football_image.jpeg" alt="football" />
                        </div>
                        <div className="about-content">
                            <h3>More than just code</h3>
                            <p>
                                Outside of development, I value discipline, teamwork, and consistency — qualities shaped through sports and personal challenges.
                            </p>
                        </div>
                    </motion.section>

                </div>
            </div>
        </>
    );
}

export default About;
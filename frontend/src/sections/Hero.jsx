import React from "react";
import "../styles/Hero.css";
import { motion, AnimatePresence, useScroll, useTransform, stagger } from "framer-motion";
import vijay_photo from "../../public/vijay_photo.png"





const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } }
};

const item = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

function Hero() {

    const { scrollY } = useScroll();

    const imageY = useTransform(scrollY, [0, 300], [100, -200]);
    const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const vijayLogo = useTransform(scrollY, [0, 300], [64, 20]);
    const vijayLogoX = useTransform(scrollY, [0, 150], [0, -100]);
    const vijayLogoY = useTransform(scrollY, [0, 150], [0, -100]);


    return (
        <>
            <motion.div variants={container} initial="hidden" animate="visible" className="hero-container">
                <div className="hero-left">
                    <motion.h2 className="hero-heading" variants={item}>
                        Hi, I'm{" "}
                        <motion.span style={{ display: "inline-block", fontSize: vijayLogo, y: vijayLogoY, opacity: textOpacity }}>
                            Vijay
                        </motion.span>
                    </motion.h2>
                    <motion.h3 className="hero-sub-heading" variants={item}>Frontend / MERN Developer</motion.h3>
                    <motion.p className="hero-description" variants={item}>Building modern web experiences with clean code and great design.</motion.p>
                    <motion.div className="hero-buttons" variants={item}>
                        <a href="#projects" className="btn primary">View Projects</a>

                        <a
                            href="https://www.upwork.com/freelancers/vijays125?mp_source=share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn secondary"
                        >
                            Hire Me
                        </a>
                    </motion.div>
                </div>

                <div className="profile-image-section">
                    <motion.img
                        src={vijay_photo}
                        style={{ y: imageY }}
                        className="profile-photo"
                    />
                </div>



            </motion.div>
        </>
    )
}

export default Hero;
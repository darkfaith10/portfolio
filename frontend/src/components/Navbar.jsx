import React from "react";
import "../styles/Navbar.css";
import { motion, useScroll, useTransform } from "framer-motion";

function Navbar({ scrollContainerRef }) {
    const { scrollY } = useScroll({
        container: scrollContainerRef?.current?.container
    });

    

    const logoOpacity = useTransform(scrollY, [150, 300], [0, 1]);
    const logoScale = useTransform(scrollY, [0, 300], [1.2, 1]);


    const menuX = useTransform(scrollY, [0, 150], ["-50%", "60%"]);

    return (
        <motion.nav className="navbar">
            <motion.div
                className="logo"
                style={{ opacity: logoOpacity, scale: logoScale }}
            >
                Vijay
            </motion.div>

            <motion.div
                className="nav-links"
                style={{ x: menuX }}
            >
                <motion.a whileHover={{ scale: 1.1 }} href="#home">Home</motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#skills">Skills</motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#projects">Projects</motion.a>
                <motion.a whileHover={{ scale: 1.1 }} href="#contact">Contact</motion.a>
            </motion.div>
        </motion.nav>
    );
}

export default Navbar;
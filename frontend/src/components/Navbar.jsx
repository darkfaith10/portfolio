import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

function Navbar({ scrollContainerRef }) {

    const { scrollY } = useScroll({
        container: scrollContainerRef?.current?.container
    });

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            setMenuOpen(false);
        }
    }, [isMobile]);


    const logoOpacity = useTransform(scrollY, [150, 300], [0, 1]);
    const logoScale = useTransform(scrollY, [0, 300], [1.2, 1]);


    const menuX = useTransform(scrollY, [0, 150], ["-50%", "60%"]);
    const menuOpacity = useTransform(scrollY, [50, 150], [1, 0]);


    const hamburgerOpacity = useTransform(scrollY, [100, 200], [0, 1]);

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
                style={{
                    x: menuX,
                    opacity: isMobile ? menuOpacity : 1
                }}
            >
                <a href="#hero">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </motion.div>


            {isMobile && (
                <motion.div
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{ opacity: hamburgerOpacity }}
                >
                    <span />
                    <span />
                    <span />
                </motion.div>
            )}

            <AnimatePresence>
                {isMobile && menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <a onClick={() => setMenuOpen(false)} href="#hero">Home</a>
                        <a onClick={() => setMenuOpen(false)} href="#skills">Skills</a>
                        <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
                        <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.nav>
    );
}

export default Navbar;
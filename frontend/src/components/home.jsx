import { React, useState, useRef } from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Projects from "../sections/Projects";



function Home() {


    return (
        <>
            <Navbar />
            <section id="hero" className="hero-section"><Hero /></section>
            <section id="about" className="about-section"><About /></section>
            <section id="projects" className="project-section"><Projects /></section>
            <section id="skills" className="skills-section"><Skills /></section>
            <section id="contact" className="contact-section"><Contact /></section>



        </>
    )
}

export default Home;
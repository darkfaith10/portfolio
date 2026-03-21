import React from "react";
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact-section-details">

            <h2 className="contact-heading">
                Let's Build Something Great Together
            </h2>

            <p className="contact-subtext">
                I'm currently available for freelance work and exciting development opportunities.
                If you're looking for a developer to build modern web applications, feel free to reach out.
            </p>

            <div className="contact-buttons">
                <a href="#" className="btn primary">Hire Me</a>
                <a href="#" className="btn secondary">View Upwork</a>
            </div>

            <div className="contact-links">
                <a href="#">Email</a>
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
                <a href="#">Upwork</a>
            </div>

        </div>
    );
}

export default Contact;
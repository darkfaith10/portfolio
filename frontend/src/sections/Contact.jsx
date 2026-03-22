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
                <a href="#projects" className="btn primary">View Projects</a>

                <a
                    href="https://www.upwork.com/freelancers/vijays125?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary"
                >
                    Hire Me
                </a>
            </div>

            <div className="contact-links">
                <a href="mailto:kumarsinghvijay985@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/vijay-kumar-singh-darkfaith/" target="_blank">LinkedIn</a>
                <a href="https://github.com/darkfaith10" target="_blank">GitHub</a>
                <a href="https://www.upwork.com/freelancers/vijays125?mp_source=share" target="_blank">Upwork</a>
            </div>

        </div>
    );
}

export default Contact;
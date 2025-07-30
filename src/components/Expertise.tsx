import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faUnity, faHtml5, faJava, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Python",
    "Selenium",
    "Beautiful Soup",
    "Tkinter UI",
    "JavaScript",
    "C#",
    "Git",
    "GitHub",
];

const labelsSecond = [
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "Passport.js",
    "Postman API",
    "PostgreSQL",
    "Swagger API",
    "Security",
];

const labelsThird = [
    "Python",
    "Pandas",
    "Scikit-Learn",
    "Supervised Learning",
    "Unsupervised Learning",
    "Regression & Classification",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Programming</h3>
                    <p>I have built numerous applications with the help of Java, Python, JavaScript, and C#. One of these applications helped to make internship opportunity search 5x faster!</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faHtml5} size="3x"/>
                    <h3>Web Development</h3>
                    <p>I have utilised web development tools to build numerous tech solutions to real problems. One website I developed has helped over 50 students catch up with missed university lectures.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Machine Learning</h3>
                    <p>AI is having a major impact on the tech industry. For this reason, I have recently adopted AI skills by building various models one of which was a logistic regression model with 97% accuracy!
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
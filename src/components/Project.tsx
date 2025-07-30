import React from "react";
import lcp from '../assets/images/lcp.png';
import ML from '../assets/images/ML.jpg';
import athletics from '../assets/images/athletics.png';
import horrorgame from '../assets/images/horrorgame.png';
import andie from '../assets/images/andie.png';
import scraper from '../assets/images/scraper.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={lcp} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Lecture Cram Planner</h2></a>
                <p>Developed a web application that helps students with lecture catch up using HTML, CSS, JavaScript, and SQL. 
                </p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={andie} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>ANDIE (A Non Destructive Image Editor)</h2></a>
                <p>Collaboratively developed image editor application where my main responsibilities were setting up the CI pipeline along 
                    with adding a macro feature which allows users to define sequences of image operations. 
                </p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={scraper} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>Internship Web Scraper</h2></a>
                <p>Developed a Python application that can scrape the web for opportunities from various companies.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={athletics} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Athletics Race Simulator</h2></a>
                <p>Developed a Java application that can simulate a running race. For instance, you can see what a race between you and Usain Bolt would look like.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={horrorgame} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Zombie Horror Game</h2></a>
                <p>This is a horror game developed using Unity that is designed to give you a jumpscare. The aim of the game is to survive as long as possible by 
                    running from, or attacking zombies as well as eating food.
                </p>
            </div>
            <div className="project">
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><img src={ML} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="http://www.wemanage.jp/" target="_blank" rel="noreferrer"><h2>Machine Learning Practice</h2></a>
                <p>This is a GitHub repository that contains all of the practice machine learning models I have developed 
                    with use of the UCI Machine Learning Repository. I plan to make more advanced programs in the future.
                </p>
            </div>

            
        </div>
    </div>
    );
}

export default Project;
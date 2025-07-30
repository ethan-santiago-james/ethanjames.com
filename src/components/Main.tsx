import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">

        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/ethan-santiago-james" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ethansantiagojames/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ethan James</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/ethan-santiago-james" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ethansantiagojames/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
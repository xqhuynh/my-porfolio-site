import React from "react";
import Surrender from "./surrender.gif";
import Cake from "./cake.jpg";

function Projects() {
  return (
    <>
      <h3 className="resume-header">Projects</h3>
      {/* Sweet Surrender Project */}
      <div className="projects-container">
        <div className="project-desc">
          <h3 className="project-title">Sweet Surrender</h3>
          <p>This project is my solor project I created in a 2 week sprint</p>
        </div>
        <div className="project-card">
          <img
            className="cake-img"
            src={Surrender}
            alt="Sweet Surrender Giphy"
          />
        </div>
      </div>

      {/* Client Project */}
      <div className="projects-container">
        <div className="project-desc">
          <h3 className="project-title">Groupie</h3>
          <p>This project is my solor project I created in a 2 week sprint</p>
        </div>
        <div className="project-card">
          <img className="cake-img" src={Surrender} alt="Groupie Giphy" />
        </div>
      </div>

      {/* Sweet Surrender Project */}
      <div className="projects-container">
        <div className="project-desc">
          <h3 className="project-title">Sweet Surrender</h3>
          <p>This project is my solor project I created in a 2 week sprint</p>
        </div>
        <div className="project-card">
          <img className="cake-img" src={Surrender} alt={Cake} />
        </div>
      </div>
    </>
  );
}

export default Projects;

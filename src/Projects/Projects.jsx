import React from "react";
import Surrender from "./surrender.gif";
import Groupie from "./groupie1.gif";
import GroupieTwo from "./Groupie2.gif";
import ServerImg from "./server-side.png";

function Projects() {
  return (
    <>
      <h3 className="resume-header">Projects</h3>
      <hr className="projects-line" />
      {/* Sweet Surrender Project */}
      <div className="projects-container">
        <div className="project-desc">
          <h3 className="project-title">Sweet Surrender</h3>
          <p className="desc-text">
            Sweet Surrender is an e-commerce cake store that I built during a 2
            week sprint. This project allowed me to show what I learned at Prime
            Academy.
          </p>
          <br />
          <p className="desc-text">
            Sweet Surrender was created using the PERN stack: PostgreSQL,
            Express.js, Node.js, and React. In addition, I also utilized
            Material UI, Bootstrap, and Redux.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://intense-reaches-03253.herokuapp.com/#/home"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="cake-img"
              src={Surrender}
              alt="Sweet Surrender Giphy"
            />
          </a>
        </div>
      </div>

      {/* Groupie Project */}
      <div className="projects-container">
        <div className="project-desc">
          <h3 className="project-title">Groupie</h3>
          <p className="desc-text">
            Groupie is an application I built with 3 other peers. In a nutshell,
            Groupie allows gym goers to search for gym instructors based on
            their affiliation/tags such as LGBTQ, Veteran, Senior Fitness, etc.
          </p>
          <br />
          <p className="desc-text">
            It was built for a client who wanted inclusivity for gym goers so
            that gym goers would be more inclined to attend classes taught by
            gym instructors who share common affiliation/tags.
          </p>
          <br />
          <p className="desc-text">
            The main technologies used: PERN stack, Redux, Amazon AWS, Google
            Maps, Google Places, Material UI.
          </p>
          <br />
          <p>This app is best viewed in mobile view.</p>
        </div>
        <div className="project-card">
          <a
            href="https://morning-woodland-01521.herokuapp.com/#/home"
            target="_blank"
            rel="noreferrer"
          >
            <img className="groupie-gif" src={Groupie} alt="Groupie Giphy" />
            <img
              className="groupie-gif"
              src={GroupieTwo}
              alt="Groupie Giphy2"
            />
          </a>
        </div>
      </div>

      {/* Server Side Calculator */}
      <div className="projects-container">
        <div className="project-desc">
          <h3 className="project-title">Server Side Calculator</h3>
          <p className="desc-text">
            Sweet Surrender is an e-commerce cake store that I built during a 2
            week sprint. This project allowed me to show what I learned at Prime
            Academy.
          </p>
          <br />
          <p className="desc-text">
            Sweet Surrender was created using the PERN stack: PostgreSQL,
            Express.js, Node.js, and React. In addition, I also utilized
            Material UI, Bootstrap, and Redux.
          </p>
        </div>
        <div className="project-card">
          <a
            href="https://server-side-calculator-final.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="calculator-img"
              src={ServerImg}
              alt="Calculator img"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default Projects;

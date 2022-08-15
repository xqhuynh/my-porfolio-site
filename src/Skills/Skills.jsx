import React from "react";

function Skills() {
  return (
    <>
      <h3 className="resume-header">Skills</h3>
      <hr className="skills-line" />
      <div className="skills-container">
        <div className="skills-one">
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="skills-two">
          <ul>
            <li>Redux</li>
            <li>Material UI</li>
            <li>PostgreSQL</li>
            <li>Git & GitHub</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div className="skills-three">
          <ul>
            <li>JavaScript</li>
            <li>Amazon AWS</li>
            <li>C#</li>
            <li>.Net</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;

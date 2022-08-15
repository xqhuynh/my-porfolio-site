import React from "react";
import Experience from "./Experience";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";

function Resume() {
  return (
    <>
      <div className="resume-container">
        <Experience />
        <Skills />
        <Education />
      </div>
    </>
  );
}

export default Resume;

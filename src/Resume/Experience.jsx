import React from "react";
import ExperienceCardOne from "./ExperienceCardOne";
import ExperienceCardTwo from "./ExperienceCardTwo";
import ExperienceCardThree from "./ExperienceCardThree";

function Experience() {
  return (
    <>
      <span>
        <h3 className="experience-title">Work Experience</h3>
      </span>
      <ExperienceCardOne />
      <ExperienceCardTwo />
      <ExperienceCardThree />
    </>
  );
}

export default Experience;

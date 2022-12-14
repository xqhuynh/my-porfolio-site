import React from "react";
import ExperienceCardOne from "./ExperienceCardOne";
import ExperienceCardTwo from "./ExperienceCardTwo";
import ExperienceCardThree from "./ExperienceCardThree";
import ExperienceCardFour from "./ExperienceCardFour";
import ExperienceCardFive from "./ExperienceCardFive";
import ExperienceCardSix from "./ExperienceCardSix";
import ExperienceCardSeven from "./ExperienceCardSeven";
import ExperienceCardEight from "./ExperienceCardEight";

function Experience() {
  return (
    <>
      <h3 className="resume-header">Work Experience</h3>
      <hr className="experience-line" />
      <ExperienceCardOne />
      <ExperienceCardTwo />
      <ExperienceCardThree />
      <ExperienceCardFour />
      <ExperienceCardFive />
      <ExperienceCardSix />
      <ExperienceCardSeven />
      <ExperienceCardEight />
    </>
  );
}

export default Experience;

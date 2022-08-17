import React from "react";

function ExperienceCardOne() {
  return (
    <>
      {/* Prime Digital Experience */}
      <div className="rt-side-experience">
        <div>
          <p className="dates">March 2022 - Present</p>
        </div>
        <div className="experience-rt">
          <p>
            <strong>Prime Digital Academy</strong> / Software Engineer Student
          </p>
          <p className="location">Minneapolis, MN</p>
          <p>Solo Project: Sweet Surrender eCommerce Store</p>
          <ul>
            <li>
              Design wireframes using Figma and translate prototype to website
              design
            </li>
            <li>
              Create eCommerce web application using PERN stack in addition to
              Material UI, Passport, and Bootstrap within 2-week sprint
            </li>
          </ul>

          <p>Client Project: Groupie Web Application</p>
          <ul>
            <li>
              Engage with client and provide prototype based on client
              specifications using Figma and present to client for approval
            </li>
            <li>
              Design web application within 2-week sprint utilizing PERN stack
              along with Amazon AWS, Google Maps and Google Places 3rd party API
            </li>
            <li>
              Present web application to client and other stakeholders after
              completion
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ExperienceCardOne;

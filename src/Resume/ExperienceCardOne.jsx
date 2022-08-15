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
            <strong>Prime Digital Academy</strong> / Software Developer Student
          </p>
          <p className="location">Minneapolis, MN</p>
          <p>Solo Project: Sweet Surrender</p>
          <ul>
            <li>
              Sweet Surrender is an e-commerce store that sells custom cakes
            </li>
            <li>
              Technologies used: React, Node.js, Express.js, PostgreSQL,
              Passport, Material UI, Bootstrap
            </li>
          </ul>

          <p>Client Project: Groupie</p>
          <ul>
            <li>
              Groupie is an app that allows gym goers to search for gym
              instructors based on identity markers/tags such as LGBTQ, Veteran,
              Senior Fitness, etc.
            </li>
            <li>
              Technologies used: React, Node.js, Redux, Express, Postgres,
              Passport, Material UI, Amazon AWS, Google Maps & Places
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ExperienceCardOne;

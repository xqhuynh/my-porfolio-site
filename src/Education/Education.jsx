import React from "react";

function Education() {
  return (
    <>
      {/* Prime Academy */}
      <h3 className="resume-header">Education</h3>
      <hr className="education-line" />
      <div className="education-container">
        <div>
          <p className="dates">March 2022 - August 2022</p>
        </div>
        <div className="education-rt">
          <p>
            <strong>Prime Digital Academy</strong> / Full Stack Engineer,
            Certificate
          </p>
          <p>Minneapolis, MN</p>
        </div>
      </div>

      {/* University of MN */}
      <div className="education-container">
        <div>
          <p className="dates">January 2017 - December 2021</p>
        </div>
        <div className="education-rt">
          <p>
            <strong>University of Minnesota</strong> / IT Management, B.S.
          </p>
          <p>Minneapolis, MN</p>
        </div>
      </div>
    </>
  );
}

export default Education;

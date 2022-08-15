import React from "react";

import "../App.css";

function NavBar() {
  return (
    <>
      <div className="navbar-container">
        <a href="/">
          <div className="left-nav">SH</div>
        </a>

        {/* Right side of navbar */}
        <div className="right-nav">
          <a href="/">
            <div>Home</div>
          </a>

          <div className="vertical-line"></div>
          <a href="/resume">
            <div>Resume</div>
          </a>

          <div className="vertical-line"></div>
          <a href="/projects">
            <div>Projects</div>
          </a>

          <div className="vertical-line"></div>
          <a href="/contact">
            <div>Contact</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;

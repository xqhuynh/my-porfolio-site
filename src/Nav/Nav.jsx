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
            <div className="nav-link">Home</div>
          </a>

          <div className="vertical-line"></div>
          <a href="/resume">
            <div className="nav-link">Resume</div>
          </a>

          <div className="vertical-line"></div>
          <a href="/projects">
            <div className="nav-link">Projects</div>
          </a>

          <div className="vertical-line"></div>
          <a href="/contact">
            <div className="nav-link">Contact</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default NavBar;

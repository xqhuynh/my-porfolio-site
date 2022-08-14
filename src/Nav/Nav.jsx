import React from "react";
import "../App.css";

function NavBar() {
  return (
    <>
      <div className="navbar-container">
        <div className="left-nav">Savon Huynh</div>
        <div className="right-nav">
          <div>Resume</div>
          <div className="vertical-line"></div>
          <div>Projects</div>
          <div className="vertical-line"></div>
          <div>Contact</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

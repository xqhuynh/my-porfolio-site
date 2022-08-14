import React from "react";
import Savon from "./savon.jpeg";
import "../App.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Icon from "@mui/material/Icon";

function Main() {
  return (
    <>
      <div className="main-container">
        {/* Left side of main */}
        <div className="left-main">
          <div>
            <img className="savon-img" src={Savon} alt={Savon} />
          </div>
          <div className="job-title">Software Engineer</div>
          <div className="follow-me">Follow Me</div>
          <div className="social-icons">
            <Icon>
              <FacebookIcon />
            </Icon>
            <Icon>
              <InstagramIcon />
            </Icon>
            <Icon>
              <LinkedInIcon />
            </Icon>
          </div>
        </div>

        <div className="right-main">
          <div className="hello-text">Hello</div>
          <div className="description">
            My name is Savon and I love to use technology to solve problems.
            Technology is rampant in our daily lives and I want to contribute
            and add value to it any way I can.
          </div>
          <div className="circle-links">
            <span>Resume</span>
            <span>Projects</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

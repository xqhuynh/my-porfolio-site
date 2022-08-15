import React from "react";
import "../App.css";

function Footer() {
  return (
    <footer>
      <hr className="footer-line" />
      <div className="footer-container">
        <div className="left-footer">
          <div>Phone</div>
          <div>612-386-7919</div>
        </div>
        <div className="middle-footer">
          <div>Email</div>
          <div>xqhuynh@gmail.com</div>
        </div>
        <div className="rt-footer">&copy; 2022 By Savon Huynh</div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import TextField from "@mui/material/TextField";

function Contact() {
  return (
    <>
      <h3 className="resume-header">Contact</h3>
      <hr className="contact-line" />
      <div className="contact-container">
        <div>
          <div className="label-text">
            <label>First Name</label>
          </div>
          <div className="text-field">
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </div>
        </div>

        <div>
          <div className="label-text">
            <label>Last Name</label>
          </div>
          <div className="text-field">
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </div>
        </div>

        <div>
          <div className="label-text">
            <label>Email</label>
          </div>
          <div className="text-field">
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </div>
        </div>

        <div>
          <div className="label-text">
            <label>Subject</label>
          </div>
          <div className="text-field">
            <TextField id="outlined-basic" variant="outlined" size="small" />
          </div>
        </div>

        <div>
          <div className="label-text">
            <label>Leave me a message...</label>
          </div>
          <div className="text-field">
            <TextField id="outlined-multiline-static" multiline rows={4} />
          </div>
        </div>

        <div>
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </>
  );
}

export default Contact;

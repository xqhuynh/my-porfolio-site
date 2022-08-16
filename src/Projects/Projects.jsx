import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Calculator from "./images/server-side.png";
import Cake from "./images/sweet-surrender.png";
import Groupie from "./images/groupie.png";

function Projects() {
  return (
    <>
      <h3 className="resume-header">Projects</h3>
      <hr className="projects-line" />

      {/* Sweet Surrender Project */}
      <div className="project-container">
        <div className="project-0">
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              className="card-img"
              component="img"
              height="140"
              image={Cake}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sweet Surrender
              </Typography>
              <Typography variant="body2" color="text.secondary">
                An e-commerce cake store created using the PERN stack.
                Technologies used: React, Node.js, Express.js, Postgres,
                Material UI, Bootstrap, Redux.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://intense-reaches-03253.herokuapp.com/#/home"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small">View Site</Button>
              </a>

              <a
                href="https://github.com/xqhuynh/sweet-surrender"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small">Source Code</Button>
              </a>
            </CardActions>
          </Card>
        </div>

        {/* Groupie Project */}
        <div>
          <Card className="project-card" sx={{ maxWidth: 400 }}>
            <CardMedia
              className="card-img"
              component="img"
              height="140"
              image={Groupie}
              alt="groupie"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Groupie
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This app allows gym goers to search for gym instructors based
                off tags such as LGBTQ, Senior, etc. PERN stack. Also used
                Amazon AWS, Google Map, Google Places.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://morning-woodland-01521.herokuapp.com/#/home"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small">View Site</Button>
              </a>

              <a
                href="https://github.com/xqhuynh/Groupie"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small">Source Code</Button>
              </a>
            </CardActions>
          </Card>
        </div>

        {/* Calculator Project */}
        <div>
          <Card className="project-card" sx={{ maxWidth: 400 }}>
            <CardMedia
              className="card-img"
              component="img"
              height="140"
              image={Calculator}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Server Side Calculator
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is a simple calculator that takes in two numbers and
                performs basic arithmetic. Technologies used are jQuery and
                Ajax.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href="https://server-side-calculator-final.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small">View Site</Button>
              </a>

              <a
                href="https://github.com/xqhuynh/jquery-server-calculator"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small">Source Code</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "/Projects/leaf.png";
import emotion from "/Projects/emotion.png";
import editor from "/Projects/codeEditor.png";
import chatify from "/Projects/chatify.png";
import suicide from "/Projects/suicide.png";
import bitsOfCode from "/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tech-N-Drive"
              description="An eCommerce website built with the MERN stack (MongoDB, Express, React, Node.js) and styled using Material UI, ensuring a sleek and intuitive user interface."
              ghLink="https://github.com/skywokah/techndrvie"
              demoLink="https://tech-n-drive.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Kerala Tourism Page Mockup"
              description="A mock-up of Kerala Tourism page  with the help of  React.js, Vite, HTML,CSS and Bootstrap Library ."
              ghLink="https://github.com/skywokah/keralatourism"
              demoLink="https://keralatourismpage.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description=" a  Flood Monitoring system that notifies both the civilians and the authorities and further the predict the flood pattern using Machine Learning models that is displayed by a website 
designed with the help of HTML,CSS and Django."
              ghLink="https://github.com/skywokah/flood-monitoring"
              demoLink="/"              
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

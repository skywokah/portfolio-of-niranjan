import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Niranjan Krishna S </span>
            from <span className="purple"> Kerala, India.</span>
            I have completed B.tech in Electronics & communication at Vidya Academy of Science and technology,
            Thrissur.
            <br />
            <br />
            Apart from freelance coding & content creation , some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be Similar,but Better!"{" "}
          </p>
          <footer className="blockquote-footer">NIRANJAN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

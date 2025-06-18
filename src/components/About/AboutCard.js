import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sudhakar Sharma </span>
            from <span className="purple"> Gorakhpur (U.P), India.</span>
            <br />
            I recently completed my B.Tech from ABES Engineering College, Ghaziabad . 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovate with intention, build with heart!"{" "}
          </p>
          <footer className="blockquote-footer">Sudhakar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

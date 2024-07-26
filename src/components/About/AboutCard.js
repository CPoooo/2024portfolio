import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Cameron Pool </span>
            from <span className="purple"> Lucas, Texas.</span>
            <br />
            I am a self-taught programmer (that went to college for 5 years)
            <br />
            I completed my education with a Bachelors degree in Computer Science from Oklahoma Baptist University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Baseball Pitcher (or used to I should say)
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching AI
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning more about coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about the universe and God
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "because if you confess with your mouth that Jesus is Lord and believe in your herat that God raised him from the dead, you will be saved"{" "}
          </p>
          <footer className="blockquote-footer">Romans 10:9</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

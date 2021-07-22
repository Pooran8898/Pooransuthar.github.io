import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pooran Suthar </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />I am a third year Bachelor of Arts Student from Shailendra
            College, Mumbai University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Box cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving Data Structures
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Algorithms
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

import React from "react";
import { Card } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src="/gg.jpg" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title className="text-black">Sadia Islam Mitu</Card.Title>
          <Card.Text>
            <small className="text-black">
              MY MISSION: TO MAKE THE LIFE &<br />
              WORK OF CONSULTANTS EVEN BETTER
            </small>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br />
    </div>
  );
};

export default About;

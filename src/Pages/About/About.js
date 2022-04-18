import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import img from "../../images/Profile.jpg";
import "./About.css";
const About = () => {
  return (
    <div className="profile">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={img} style={{ width: "18rem" }} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
             <div>
             Hello! I'm Sabuj Mahonto,I develop web applications, My core skill
              is based on JavaScript and I love to do most of the things using
              JavaScript. I love to make the web more open to the world.
             </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default About;

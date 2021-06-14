import React from "react";
import Card from 'react-bootstrap/Card';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Card fluid>
    <Card.Img varient="top"
    src="jm-headshot.jpg" />
    <Card.Body id="contact-me">
    <Card.Title>Contact Me</Card.Title>
    <Card.Link href="https://www.linkedin.com/in/janee-mays/"><SocialIcon url="https://www.linkedin.com/in/janee-mays/" /></Card.Link>
    <Card.Link href="https://github.com/janee-elise-mays"><SocialIcon url="https://github.com/janee-elise-mays" /></Card.Link>
    <Card.Link ><SocialIcon url="janee.elise@gmail.com" network="email"/></Card.Link>
    <Card.Link href="../images/jm-resume2021"><SocialIcon network="google" /></Card.Link>
    </Card.Body>
    <p>Copyright ⓒ {currentYear}</p>
    </Card>
  );
}

export default Footer;

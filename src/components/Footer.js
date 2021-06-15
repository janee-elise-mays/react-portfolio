import React from "react";
import Card from 'react-bootstrap/Card';
import { SocialIcon } from 'react-social-icons';
import image3 from '../images/jm-headshot.jpg';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Card border="dark">
    <h3 id="contact-me">Contact Me</h3>
    <Card.Img varient="top"
    src={image3} className="AbtImg" alt="professional headshot of developer" />
    <Card.Body id="contact-me">
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

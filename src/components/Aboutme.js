import React from "react";
// import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';

function Aboutme() {

    return (
        <Container>
        <Row>
        <Media>
            <img
            width={100}
            height={100}
            className="aboutImg"
            src="../images/pasadena.jpg"
            alt="developer in front of grafitti wall"
        />
        <Media.Body>
            <h3 id="about-me">About Me</h3>
            <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
            </p>
        </Media.Body>
            <img
            width={100}
            height={100}
            className="aboutImg"
            src="../images/flower.jpg"
            alt="developer in flower field"
        />
        </Media>
        </Row>
        </Container>
    )
}

export default Aboutme;
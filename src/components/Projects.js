import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgimage1 from '../images/ice-cream-2.jpg';
import bgimage2 from '../images/cactus.jpg';
import bgimage3 from '../images/ice-cream.jpg';
import bgimage4 from '../images/pizza.jpg';
import bgimage5 from '../images/cone.jpg';
import bgimage6 from '../images/burgers.jpg';

function Projects() {
    return(
        <Container fluid="md">
        <h3 id="projects">Projects</h3>
        <Row>
            <Col style={{backgroundImage: `url(${bgimage1})`, backgroundSize: 'cover'}}>
        <h4>Use it or lose it</h4>
            </Col>
            <Col style={{backgroundImage: `url(${bgimage2})`, backgroundSize: 'cover'}}>
        <h4>Professional Scheduler</h4>
            </Col>
            <Col style={{backgroundImage: `url(${bgimage3})`, backgroundSize: 'cover'}}>
        <h4>The Loo Review</h4>
            </Col>
        </Row>
        <Row>
            <Col style={{backgroundImage: `url(${bgimage4})`, backgroundSize: 'cover'}}>
        <h4>Budget-Tracker</h4>
            </Col>
            <Col style={{backgroundImage: `url(${bgimage5})`, backgroundSize: 'cover'}}>
        <h4>Fitness-Tracker</h4>
            </Col>
            <Col style={{backgroundImage: `url(${bgimage6})`, backgroundSize: 'cover'}}>
        <h4>Note-Taker</h4>
            </Col>
        </Row>
        </Container>
    )
}


export default Projects;
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SocialIcon } from 'react-social-icons';
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
            <a href="https://janee-elise-mays.github.io/Use-it-or-lose-it/">
        <h4>Use it or lose it <SocialIcon bgColor="white" url="https://github.com/janee-elise-mays/Use-it-or-lose-it/" /></h4>
            </a>
            
            </Col>
            <Col style={{backgroundImage: `url(${bgimage2})`, backgroundSize: 'cover'}}>
            <a href="https://janee-elise-mays.github.io/professional-work-day-scheduler/">
        <h4>Professional Scheduler <SocialIcon bgColor="white" url="https://github.com/janee-elise-mays/professional-work-day-scheduler" /></h4>
            </a>
            </Col>
            <Col style={{backgroundImage: `url(${bgimage3})`, backgroundSize: 'cover'}}>
            <a href="https://the-loo-review.herokuapp.com/">
        <h4>The Loo Review <SocialIcon bgColor="white" url="https://github.com/janee-elise-mays/the-loo-review" /></h4>
            </a>
            </Col>
        </Row>
        <Row>
            <Col style={{backgroundImage: `url(${bgimage4})`, backgroundSize: 'cover'}}>
            <a href="https://janee-elise-mays.github.io/jm-code-quiz/">
        <h4>Code Quiz <SocialIcon bgColor="white" url="https://github.com/janee-elise-mays/jm-code-quiz" /></h4>
            </a>
            </Col>
            <Col style={{backgroundImage: `url(${bgimage5})`, backgroundSize: 'cover'}}>
            <a href="https://mysterious-tor-15630.herokuapp.com/"> 
        <h4>Fitness-Tracker <SocialIcon bgColor="white" url="https://github.com/janee-elise-mays/fitness-tracker" /></h4>
            </a>
            </Col>
            <Col style={{backgroundImage: `url(${bgimage6})`, backgroundSize: 'cover'}}> 
            <a href="https://aqueous-bayou-29505.herokuapp.com/">
        <h4>Note-Taker <SocialIcon bgColor="white" url="https://github.com/janee-elise-mays/note-taker" /></h4>
            </a>
            </Col>
        </Row>
        </Container>
    )
}


export default Projects;
import React from "react";
import image2 from '../images/flower.jpg';
import Card from 'react-bootstrap/Card';


function Aboutme() {

    return (
        <Card>
        <h3 id="about-me">About Me</h3>
        <Card.Body>
        <Card.Text>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
        <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                anim id est laborum.
        </Card.Text>
        <Card.Img variant="bottom" src={image2} className="AbtImg" alt="photo of developer in flower field" />
        </Card.Body>
        </Card>
    )
}

export default Aboutme;
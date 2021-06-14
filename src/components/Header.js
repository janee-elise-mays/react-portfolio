import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import bgimage from '../images/blue-brick.jpg'

function Header() {
    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    if (currentTime < 12) {
        greeting = "Good Morning!";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening";
    }


    return (
            <Jumbotron style={{backgroundImage: `url(${bgimage})`, backgroundSize: 'cover'}}>
                <header>
                    <h1>{greeting}</h1>
                    <h2>My name is <span style={{ color: 'hotpink'}}>Janeé Mays</span></h2> 
                    <p>Your imagination is my inspiration.</p>
                </header>
            </Jumbotron>
    );
}

export default Header;

import React from "react";


function Header(){
    const date = new Date();
    const currentTime = date.getHours();

    let greeting;

    if (currentTime < 12) {
        greeting = "Good Morning!";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    
    return (
        <header>
        <h1>{greeting} My name is Janeé Mays</h1>
        </header>
    );
}

export default Header;

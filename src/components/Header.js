import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { animated } from "react-spring";

function Header() {
    const date = new Date();
    const currentTime = date.getHours();

    // const[flip, set] = useState(false)
    // const props = useSpring({ 
    //     to: { opacity: 1 }, 
    //     from: { opacity: 0 },
    //     reset: true,
    //     reverse: flip,
    //     delay: 200,
    //     config: config.molasses,
    //     onRest: () => set(!flip),
    // });

    let greeting;

    if (currentTime < 12) {
        greeting = "Good Morning!";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening";
    }


    return (
        <div>
            <Jumbotron>
                <header>
                    <h1>{greeting}</h1>
                    <h2>My name is Janeé Mays</h2> 
                    <p>Your imagination is my inspiration.</p>
                </header>
            </Jumbotron>
        </div>
    );
}

export default Header;

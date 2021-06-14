import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Aboutme from "./components/Aboutme";
import Container from 'react-bootstrap/Container';


function App() {
    return (
        <Container fluid>
        <Navigation />
        <Container>
            <Header />
        </Container>
        <br/>
        <Aboutme />
        <main>
        <Projects />
        </main>
            <Footer />
        </Container>
    );
}

export default App;
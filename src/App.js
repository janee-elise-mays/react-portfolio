import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Aboutme from "./components/Aboutme";


function App() {
    return (
        <div>
            <Navigation />
        <div className="container">
            <Header />
        </div>
        <br/>
        <Aboutme />
        <main>
        {/* <Projects /> */}
        </main>
            <Footer />
        </div>
    );
}

export default App;
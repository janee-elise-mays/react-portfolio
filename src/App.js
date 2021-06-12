import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";


function App() {
    return (
        <div>
            <Navigation />
        <div className="container">
            <Header />
        </div>
        <br/>
            <Footer />
        </div>
    );
}

export default App;
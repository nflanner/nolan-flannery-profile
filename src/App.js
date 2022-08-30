import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import './App.css';
import background from './Assets/Images/seattle.jpg';

function App() {
    return (
        <div className="background" styles={{ backgroundImage: `url(${background})` }}>
            <PortfolioContainer />
        </div>
    );
};

export default App;

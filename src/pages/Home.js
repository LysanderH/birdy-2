import React from "react";
import Navigation from '../components/Navigation'
import Weather from "../components/Weather";

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Weather/>
            <Navigation/>
        </>
    );
};

export default Home;

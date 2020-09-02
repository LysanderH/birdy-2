import React from "react";
import app from "../base";
import Navigation from "../components/Navigation";

const AddBird = () => {
    return (
        <div>
            <h1>Add a bird</h1>
            <Navigation />
            <button onClick={() => app.auth().signOut()}>Sign out</button>
        </div>
    );
};

export default AddBird;
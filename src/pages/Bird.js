import React, {Component} from 'react';
import Navigation from "../components/Navigation";

class Bird extends Component {
    render() {
        return (
            <section>
                <h2 className="bird">Bird Name</h2>
                <Navigation />
            </section>
        );
    }
}

export default Bird;
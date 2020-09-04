import React, {Component} from 'react';
import Navigation from "../components/Navigation";

class Encyclopedia extends Component {
    render() {
        return (
            <section>
                <h2 className="encyclopedia__heading">Encyclopédie</h2>
                <Navigation />
            </section>
        );
    }
}

export default Encyclopedia;
import React, {Component} from 'react';
import Navigation from "../components/Navigation";

class Map extends Component {
    render() {
        return (
            <section>
                <h2 className="map__heading">Carte</h2>
                <Navigation />
            </section>
        );
    }
}

export default Map;
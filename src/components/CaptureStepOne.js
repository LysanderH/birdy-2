import React, {Component} from 'react';
import Navigation from "./Navigation";
import MapContainer from "./GMap";

class CaptureStepOne extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        if ("geolocation" in navigator) {
            console.log("Available");
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({currentPosition: {lat: position.coords.latitude, lng: position.coords.longitude}})
            });
        } else {
            console.log("Not Available");
        }
    }

    render() {
        return (
            <div>
                <span>1/4</span>
                <p className="add-bird__message">{this.props.birdExists ? "Ce numéro de bague existe, c'est une reprise" : "Ce numéro de baque n'existe pas encore"}</p>
                <form onSubmit={(e) => this.props.checkRingNumber(e)}>
                    <label htmlFor="ring-number" className="add-bird__label">Numéro de bague</label>
                    <input type="text" className="add-bird__input" placeholder="AOB05 Y010 123 YB" name="ringNumber"
                           id="ring-number" />
                    <input type="submit"/>
                </form>
                <Navigation/>
            </div>
        );
    }
}

export default CaptureStepOne;
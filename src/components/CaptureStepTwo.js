import React, {Component} from 'react';
import Navigation from "./Navigation";

class CaptureStepTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: {lat: 0, lng: 0}
        }
    }

    render() {
        return (
            <div>
                <span>2/4</span>
                <form>
                    <label htmlFor="lattitude" className="add-bird__label">Lattitude</label>
                    <input type="number" className="add-bird__input" placeholder="50.63003216" name="latitude"
                           id="lattitude"/>
                    <label htmlFor="longitude" className="add-bird__label">Lattitude</label>
                    <input type="number" className="add-bird__input" placeholder="30.63003216" name="longitude"
                           id="longitude"/>

                    <input type="submit"/>
                </form>
            </div>
        );
    }
}

export default CaptureStepTwo;
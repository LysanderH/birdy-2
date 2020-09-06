import React, {Component} from 'react';
// import {useHistory} from "react-router-dom";

class CaptureStepTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: {lat: 0, lng: 0},
        }
    }

    goBack = () => {
        this.props.history.push("/add-bird/1");
    }

    render() {
        return (
            <div>
                {console.log(this.props.bird)}
                <span>2/4</span>
                <form onSubmit={(e) => this.props.stepTwo(e)}>

                    <label htmlFor="lattitude" className="add-bird__label">Lattitude</label>
                    <input type="number" className="add-bird__input" placeholder="50.63003216" name="latitude"
                           id="lattitude"/>
                    <label htmlFor="longitude" className="add-bird__label">Longitude</label>
                    <input type="number" className="add-bird__input" placeholder="30.63003216" name="longitude"
                           id="longitude"/>
                    <label htmlFor="date" className="add-bird__label">Date de capture</label>
                    <input type="date" className="add-bird__input" name="date"
                           id="date"/>
                    <label htmlFor="time" className="add-bird__label">Temp de capture</label>
                    <input type="time" className="add-bird__input" name="time"
                           id="time"/>
                    <label htmlFor="capture-method" className="add-bird__label">Méthode de capture</label>
                    <select className="add-bird__input" name="captureMethod"
                            id="capture-method">
                        <option value="nid">Au nid</option>
                        <option value="filet">Au filet</option>
                    </select>
                    <input type="submit" value="Continuer"/>
                </form>
                <button onClick={this.goBack}>Retour</button>
            </div>
        );
    }
}

export default CaptureStepTwo;
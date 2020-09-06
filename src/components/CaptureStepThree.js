import React, {Component} from 'react';

class CaptureStepThree extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {console.log(this.props.bird)}
                <span>3/4</span>
                <form onSubmit={(e) => this.props.stepThree(e)}>
                    <label htmlFor="sci_name" className="add-bird__label">Nom latin</label>
                    <input type="text" className="add-bird__input" placeholder="Clanga Clanga" name="sci_name"
                           id="sci_name"/>
                    <label htmlFor="weight" className="add-bird__label">Poid en gramme</label>
                    <input type="number" className="add-bird__input" placeholder="1500" name="weight"
                           id="weight"/>
                    <label htmlFor="adiposity" className="add-bird__label">Adiposité en %</label>
                    <input type="number" className="add-bird__input" placeholder="5" name="adiposity"
                           id="adiposity"/>
                    <label htmlFor="height" className="add-bird__label">Hauteur en cm</label>
                    <input type="number" className="add-bird__input" placeholder="15" name="height"
                           id="height"/>
                    <input type="submit" value="Continuer"/>
                </form>
            </div>
        );
    }
}

export default CaptureStepThree;
import React, {Component} from 'react';

class CaptureStepFour extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>4/4</span>
                <form onSubmit={(e) => this.props.stepFour(e)}>
                    <label htmlFor="sexe" className="add-bird__label">Sexe</label>
                    <select className="add-bird__input" name="sexe"
                            id="sexe" defaultValue={this.props.birdExists ? this.props.bird.sexe : ""}>
                        <option value="male">Mâle</option>
                        <option value="female">Femelle</option>
                    </select>
                    <label htmlFor="estimated_age" className="add-bird__label">Âge estimé</label>
                    <select className="add-bird__input" name="estimated_age"
                            id="estimated_age"
                            defaultValue={this.props.birdExists ? this.props.bird.estimated_age : ""}>
                        <option value="enfant">Enfant</option>
                        <option value="adulte">Adulte</option>
                    </select>
                    <input type="submit" value="Enrgistrer"/>
                </form>
            </div>
        );
    }
}

export default CaptureStepFour;
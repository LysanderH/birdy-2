import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Map google={this.props.google}
                 zoom={14}
                 initialCenter={this.props.positions[0]}>
                {/*{console.log(this.props.positions)}*/}
                {this.props.positions.map((position, key) =>
                    <Marker position={position} key={key} />
                )}
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyABwrM1zTcwtCEE8DkGxd8ccM54RHPTI88")
})(MapContainer)
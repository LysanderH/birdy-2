import React, { Component } from 'react';
import axios from 'axios';

export default class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date(),
            temperature: 0,
            image: null,
        };
    }
    componentDidMount() {
        const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Kelmis,be&appid=1342e924a4ff02f1244304648a338206';
        axios.get(weatherUrl).then(res => {
            const allRes = res.data;
            // console.log(allRes);
            const calcTemp = Math.round(allRes.main.temp - 273.15);
            // console.log(calcTemp);
            this.setState({
                temperature: calcTemp,
                image: allRes.weather[0].icon,
            });
        })
    }

    render() {
        return (
            <div className="weather" >
                <span className="weather__day">{this.state.date.toLocaleDateString('fr-FR', { weekday: 'long' })}</span>
                <span className="weather__temperature">{this.state.temperature} °C</span>
                <img src={"http://openweathermap.org/img/wn/" + this.state.image + "@2x.png"} />
            </div>
        )
    }
}

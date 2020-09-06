import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <nav className="nav">
                <h2 className="nav__heading sro">Navigation principale</h2>
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="/" className="nav__link nav__link--home">Accueil</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/add-bird/1" className="nav__link nav__link--add">Ajouter une capture</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/map" className="nav__link nav__link--maps">Carte</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/encyclopedia" className="nav__link nav__link--encyclopedia">Encyclopédie</Link>
                    </li>
                    <li className="nav__item">
                        <Link to="/profile" className="nav__link nav__link--account">Mon compte</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
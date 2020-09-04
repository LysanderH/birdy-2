import React, {Component, useContext} from 'react';
import {Link} from "react-router-dom";
import Navigation from "../components/Navigation";
import {AuthContext} from "../Auth";
import ProfilePicture from "../assets/defaultprofilepicture.jpg";

const Profile = () => {
    const {currentUser} = useContext(AuthContext);
    return (
        <section>
            {console.log(currentUser)}
            <h2 className="profile__heading">{currentUser.email}</h2>
            <img className="profile__picture" alt="Profile picture" src={currentUser.photoURL ? currentUser.photoURL : ProfilePicture } />
            <Link to="/user">Mon profil</Link>
            <Link to="/captures">Mes captures</Link>
            <Navigation/>
        </section>
    );
}

export default Profile;
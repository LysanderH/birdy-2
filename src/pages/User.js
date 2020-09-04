import React, {Component} from 'react';
import Navigation from "../components/Navigation";
import app from "../base";
class User extends Component {
    render() {
        return (
            <section className="user">
                <h2 className="user__heading">Votre profil</h2>
                <form className="user__form">
                    <label htmlFor="upload_img" className="user__label">Image de profil</label>
                    <input type="file" id="upload_img" className="user__input"/>
                    <label htmlFor="name" className="user__label">Nom</label>
                    <input type="text" id="name" className="user__input" />
                    <label htmlFor="password" className="user__label">Ancien mot de passe</label>
                    <input type="text" id="password" className="user__input" />
                    <label htmlFor="new_password" className="user__label">Nouveau mot de passe</label>
                    <input type="text" id="new_password" className="user__input" />
                    <input type="submit" className="submit"/>
                </form>
                <button onClick={() => app.auth().signOut()}>Sign out</button>
                <Navigation />
            </section>
        );
    }
}

export default User;
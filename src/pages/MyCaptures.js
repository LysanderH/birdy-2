import React, {Component, useContext, useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import app from "../base";
import {AuthContext} from "../Auth";

const MyCaptures = () => {
    const [captures, setCaptures] = useState([]);
    const {currentUser} = useContext(AuthContext);
    useEffect(() => {
        const getData = async () => {
            await app.firestore().collection('Birds').where('user_id', '==', currentUser.uid).get().then(
                (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        if (captures) {
                            setCaptures([doc.data()]);
                        } else {
                            setCaptures([captures, doc.data()]);
                        }
                    })
                }
            )
        }
        getData();
    }, []);
    const toDateTime = (secs) => {
        const t = new Date(1970, 0, 1); // Epoch
        t.setSeconds(secs);
        t.toLocaleDateString("fr-FR", {year: 'numeric', month: 'numeric', day: 'numeric'})
        return t.getDay() + "/" + t.getMonth() + "/" + t.getFullYear().toString();
    }
    return (
        <div>
            {console.log(captures)}
            {captures.map(bird =>
                <li className="captures__item" key={bird.bird_id}>
                    <dl>
                        <dt>{bird.name}</dt>
                        <dd>{toDateTime(bird.capture_at.seconds)}</dd>
                    </dl>
                </li>
            )}
            {(captures) ? captures.forEach((bird) => {
                return <p>{bird.name}</p>
            }) : "Vous n'aves pas encore capturé d'oiseaux"}
            <Navigation/>
        </div>
    )
}

export default MyCaptures;
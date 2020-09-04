import React, {useContext, useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import app from "../base";
import {Link} from "react-router-dom";

const CapturedBird = (props) => {
    const [bird, setBird] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await app.firestore().collection('Birds').where('bird_id', '==', props.match.params.bird).get().then(
                (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id)
                        if (bird) {
                            setBird([doc.data()]);
                        } else {
                            setBird([bird, doc.data()]);
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
        return t.getDay() + "/" + t.getMonth() + "/" + t.getFullYear();
    }
    return (
        <div>
            {console.log(props)}
            {(bird.length !== 0) ? bird.map(bird =>
                <dl key={bird.bird_id} className="captured-bird">
                    {console.log(bird)}
                    <dt className="captured-bird__therm captured-bird__therm--heading">Nom</dt>
                    <dd className="captured-bird__name">{bird.name}</dd>
                    <dt className="captured-bird__therm captured-bird__therm--captured_at">Moment de capture</dt>
                    <dd className="captured-bird__captured_at">{toDateTime(bird.capture_at.seconds)}</dd>
                    <dt className="captured-bird__therm captured-bird__therm--height">Numéro de bague</dt>
                    <dd className="captured-bird__definition captured-bird__definition--id">{props.match.params.bird}</dd>
                    <dt className="captured-bird__therm captured-bird__therm--sci_name">Nom scientifique</dt>
                    <dd className="captured-bird__definition captured-bird__definition--sci-name">{bird.sci_name}</dd>
                    <dt className="captured-bird__therm captured-bird__therm--sexe">Sexe</dt>
                    <dd className="captured-bird__definition captured-bird__definition--sexe">{bird.sexe}</dd>
                    <dt className="captured-bird__therm captured-bird__therm--adiposité">Adiposité</dt>
                    <dd className="captured-bird__definition captured-bird__definition--sexe">{bird.adiposity}%</dd>
                    <dt className="captured-bird__therm captured-bird__therm--weight">Poid</dt>
                    <dd className="captured-bird__definition captured-bird__definition--weight">{bird.weight}g</dd>
                    <dt className="captured-bird__therm captured-bird__therm--height">Hauteur</dt>
                    <dd className="captured-bird__definition captured-bird__definition--height">{bird.height}cm</dd>
                </dl>
            ) : <p>Vous n'avez pas de captures</p>}
            {/*{height: 71, capture_method: "nid", estimated_age: "enfant", user_id: "s4n6AweJKtNYonIQaNRP0248DYA2", weight: 1500, …}
adiposity: 10
bird_id: "BE 503 891 885"
capture_at: t {seconds: 1599042600, nanoseconds: 0}
capture_method: "nid"
estimated_age: "enfant"
height: 71
name: "Accenteur Alpin"
sci_name: "Clanga Clanga"
sexe: "male"
user_id: "s4n6AweJKtNYonIQaNRP0248DYA2"
weight: 1500*/}
            <Navigation/>
        </div>
    )
}

export default CapturedBird;
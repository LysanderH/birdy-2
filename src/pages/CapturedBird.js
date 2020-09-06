import React, {useContext, useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import app from "../base";
import GMap from "../components/GMap";
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
                    {console.log(bird.location)}
                    <GMap positions={[{lat: bird.location.ef, lng: bird.location.nf}]} initialPos={{lat: bird.location.ef, lng: bird.location.nf}} />
                </dl>
            ) : <p>Vous n'avez pas de captures</p>}
            <Navigation/>
        </div>
    )
}

export default CapturedBird;
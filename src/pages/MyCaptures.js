import React, {useContext, useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import app from "../base";
import {AuthContext} from "../Auth";
import {Link} from "react-router-dom";

const MyCaptures = () => {
    const [captures, setCaptures] = useState([]);
    const {currentUser} = useContext(AuthContext);
    useEffect(() => {
        const getData = async () => {
            await app.firestore().collection('Birds').where('user_id', '==', currentUser.uid).get().then(
                (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id)
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
        return t.getDay() + "/" + t.getMonth() + "/" + t.getFullYear();
    }
    return (
        <div>
            {console.log(captures)}
            {(captures.length !== 0) ? captures.map(bird =>
                <li className="captures__item" key={bird.bird_id}>
                    <Link to={"/captures/" + bird.bird_id}>
                        <dl>
                            <dt>{bird.name}</dt>
                            <dd>{toDateTime(bird.capture_at.seconds)}</dd>
                        </dl>
                    </Link>
                </li>
            ) : <p>Vous n'avez pas de captures</p>}

            <Navigation/>
        </div>
    )
}

export default MyCaptures;
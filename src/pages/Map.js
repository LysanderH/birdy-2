import React, {Component, useContext, useEffect, useState} from 'react';
import Navigation from "../components/Navigation";
import {AuthContext} from "../Auth";
import app from "../base";

// Calculate distance between two points distance (km) = sqrt(dx * dx + dy * dy)
// mit distance: Entfernung in km
// dx = 111.3 * cos(lat) * (lon1 - lon2)
// lat = (lat1 + lat2) / 2 * 0.01745
// dy = 111.3 * (lat1 - lat2)
// lat1, lat2, lon1, lon2: Breite, Länge in Grad

const Map = () => {
    const [captures, setCaptures] = useState([]);
    const [locations, setLocations] = useState([]);
    const [allLocations, setAllLocations] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await app.firestore().collection('Birds').get().then(
                (querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data().location)
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
        const mapLocations = () => {
            captures.map(bird => setAllLocations(allLocations.length !== 0 ?
                [allLocations, {lat: bird.location.t.ef, lng: bird.location.t.nf}] : [{
                    lat: bird.location.t.ef,
                    lng: bird.location.t.nf
                }])
            )
        }
        mapLocations();
    }, []);


    return (
        <section>
            <h2 className="map__heading">Carte</h2>
            {console.log(allLocations)}
            <Navigation/>
        </section>
    );

}

export default Map;
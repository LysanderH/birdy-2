import React, {useContext, useEffect, useState} from "react";
import app from "../base";
import firebase from 'firebase/app';
import {useHistory} from "react-router-dom"
import CaptureStepOne from "../components/CaptureStepOne";
import CaptureStepTwo from "../components/CaptureStepTwo";
import CaptureStepThree from "../components/CaptureStepThree";
import CaptureStepFour from "../components/CaptureStepFour";
import {AuthContext} from "../Auth";

const AddBird = (props) => {
    const history = useHistory();
    const {currentUser} = useContext(AuthContext);
    const [captures, setCaptures] = useState([]);
    let [bird, setBird] = useState({
        adiposity: 0,
        bird_id: "",
        capture_at: {seconds: 0, nanoseconds: 0},
        capture_method: "",
        estimated_age: "",
        height: 0,
        location: {ef: 0, nf: 0},
        name: "",
        sci_name: "",
        sexe: "",
        user_id: "",
        weight: 0,
    });
    const [birdExist, setBirdExist] = useState(false);

    useEffect(() => {
        console.log("effect", bird)
        const getData = async () => {
            await app.firestore().collection('Birds').get().then(
                (querySnapshot) => {
                    console.log(querySnapshot)
                    querySnapshot.forEach((doc) => {
                        if (captures) {
                            setCaptures([doc.data()]);
                            console.log(captures)
                        } else {
                            setCaptures([captures, doc.data()]);
                            console.log(captures)
                        }
                    })
                }
            )
        }
        getData();
    }, []);

    const checkRingNumber = (e) => {
        e.preventDefault();
        console.log("checkringnummer")
        const ringNumber = e.target.ringNumber.value;
        console.log("les captures", captures)
        captures.map(capture =>
            capture.bird_id.replace(/\s/g, "").toUpperCase() === ringNumber.replace(/\s/g, "").toUpperCase()
                ? setBird(capture)
                & setBirdExist(true)
                : setBirdExist(false)
                & setBird({
                    adiposity: 0,
                    bird_id: ringNumber,
                    capture_at: {date: "", time: ""},
                    capture_method: "",
                    estimated_age: "",
                    height: 0,
                    location: {ef: 0, nf: 0},
                    name: "",
                    sci_name: "",
                    sexe: "",
                    user_id: "",
                    weight: 0,
                })
        )
        history.push('/add-bird/2', bird);

    }

    const stepTwo = (e) => {
        e.preventDefault();
        console.log("Step two")
        let captured_at = {date: e.target.date.value.toString(), time: e.target.time.value.toString()};
        let location = {ef: parseInt(e.target.lattitude.value), nf: parseInt(e.target.longitude.value)}
        let captureMethod = e.target.captureMethod.value;
        console.log("step 2 a", bird)
        setBird(
            bird,
            bird.capture_at = captured_at,
            bird.location = location,
            bird.capture_method = captureMethod,
        )
        console.log("step 2 b", bird)
        history.push('/add-bird/3', bird);
        console.log("step 2 c", bird)
    }
    const stepThree = (e) => {
        e.preventDefault();
        let sciName = e.target.sci_name.value;
        let weight = parseInt(e.target.weight.value);
        let adiposity = parseInt(e.target.adiposity.value);
        let height = parseInt(e.target.height.value);
        setBird(
            bird,
            bird.adiposity = adiposity,
            bird.sci_name = sciName,
            bird.weight = weight,
            bird.height = height,
        );
        console.log("step 3 b", bird)

        history.push('/add-bird/4');
        console.log("step 3 c", bird)
    }
    const stepFour = (e) => {
        e.preventDefault();
        console.log("Step four")
        let sexe = e.target.sexe.value;
        let estimated_age = e.target.estimated_age.value;
        setBird(
            bird,
            bird.sexe = sexe,
            bird.estimated_age = estimated_age,
        );
        const date = new Date(bird.capture_at.date + " " + bird.capture_at.time);

        app.firestore().collection("Birds").add({
            adiposity: bird.adiposity,
            bird_id: bird.bird_id,
            capture_at: firebase.firestore.Timestamp.fromDate(date),
            capture_method: bird.capture_method,
            estimated_age: bird.estimated_age,
            height: bird.height,
            location: new firebase.firestore.GeoPoint(parseInt(bird.location.ef), parseInt(bird.location.nf)),
            sci_name: bird.sci_name,
            sexe: bird.sexe,
            user_id: currentUser.uid,
            weight: 0,
        })
            .then(function () {
                history.push('/add-bird/5');
            })
            .catch(function (error) {
                prompt(error);
            });
        console.log(bird)
        // history.push('/add-bird/5');
    }
    return (
        <section className="add-bird">
            <h2 className="add-bird__heading">Ajouter un oiseau</h2>
            {console.log(bird)}
            {props.match.params.step === "1" ?
                <CaptureStepOne checkRingNumber={checkRingNumber} history={history} bird={bird} birdExists={birdExist}/> : ''}
            {props.match.params.step === "2" ?
                <CaptureStepTwo stepTwo={stepTwo} bird={bird} history={history} birdExists={birdExist}/> : ''}
            {props.match.params.step === "3" ?
                <CaptureStepThree stepThree={stepThree} bird={bird} history={history} birdExists={birdExist}/> : ''}
            {props.match.params.step === "4" ?
                <CaptureStepFour stepFour={stepFour} bird={bird} history={history} birdExists={birdExist}/> : ''}
        </section>
    );
};

export default AddBird;
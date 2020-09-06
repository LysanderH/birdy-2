import React, {useEffect, useState} from "react";
import app from "../base";
import {useHistory} from "react-router-dom"
import Navigation from "../components/Navigation";
import CaptureStepOne from "../components/CaptureStepOne";
import CaptureStepTwo from "../components/CaptureStepTwo";
import CaptureStepThree from "../components/CaptureStepThree";
import CaptureStepFour from "../components/CaptureStepFour";

const AddBird = (props) => {
    const [step, setStep] = useState(1);
    const [captures, setCaptures] = useState([]);
    const [bird, setBird] = useState([]);
    const [birdExist, setBirdExist] = useState(false);
    const history = useHistory();
    useEffect(() => {
        const getData = async () => {
            await app.firestore().collection('Birds').get().then(
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
    const checkRingNumber = (e) => {
        e.preventDefault();
        const ringNumber = e.target.ringNumber.value;
        captures.map(capture =>
            capture.bird_id.replace(/\s/g, "").toUpperCase() === ringNumber.replace(/\s/g, "").toUpperCase()
                ? setBird([capture])
                & setBirdExist(true)
                : setBirdExist(false)
        )
    }
    const setParamNext = () => {
        setStep(step + 1);
        console.log(step)

        history.push("/add-bird/" + step.toString());
    }
    const setParamBack = () => {
        setStep(step - 1);
        console.log(step)
        history.push("/add-bird/" + step.toString());
    }
    return (
        <section className="add-bird">
            <h2 className="add-bird__heading">Ajouter un oiseau</h2>
            {console.log(props.match.params.step, captures)}
            {props.match.params.step === "1" ?
                <CaptureStepOne checkRingNumber={checkRingNumber} bird={bird} birdExists={birdExist}/> : ''}
            {props.match.params.step === "2" ? <CaptureStepTwo bird={bird}/> : ''}
            {props.match.params.step === "3" ? <CaptureStepThree bird={bird}/> : ''}
            {props.match.params.step === "4" ? <CaptureStepFour bird={bird}/> : ''}
            <button onClick={setParamBack}>Retour</button>
            <button onClick={setParamNext}>Continuer</button>
        </section>
    );
};

export default AddBird;
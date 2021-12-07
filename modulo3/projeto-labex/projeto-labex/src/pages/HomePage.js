import React from "react";
import {useNavigate} from "react-router-dom"


export const HomePage = () => {
    const Navigate = useNavigate();
    const goToListTripsPage = () => {
        Navigate("/trips/list");
    }
    return(
        <div>
            <h1>PAGINA INICIAL</h1>
            <button onClick={goToListTripsPage}>lISTA DE VIAJENS</button>
        </div>
    )

}
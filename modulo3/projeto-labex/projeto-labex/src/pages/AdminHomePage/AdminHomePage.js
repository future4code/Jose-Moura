import React from "react";
import {useNavigate} from "react-router-dom"

export const AdminHomePage = () => {
    const navegacao = useNavigate();

    const goToHomePage = () => {
        navegacao("/");
    }
    const goToListTripsPage = () => {
        navegacao("/trips/list");
    }

    return(
        <div>
            <h1>PÁGINA INICAL ADMIN</h1>
            <button onClick={goToHomePage}>HOME</button>
            <button onClick={goToListTripsPage}>LISTA DE VIAGENS</button>
        </div>
    )

}
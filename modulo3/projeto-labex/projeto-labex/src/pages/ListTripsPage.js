import React from "react";
import {useNavigate} from "react-router-dom"

    

export const ListTripsPage = () => {
    const Navegacao = useNavigate();
    const goToHomePage = () => {
        Navegacao("/");
    }

    return(
        <div>
            <h1>LISTA DE VIAJENS</h1>
            <button>BACK</button>
            <button onClick={goToHomePage}>HOME</button>
        </div>
    )

}
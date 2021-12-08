import React from "react";
import {useNavigate} from "react-router-dom"

export const HomePage = () => {
    const navegacao = useNavigate();

    const goToListTripsPage = () => {
        navegacao("/trips/list");
    }
    const goToAdminHomePage = () => {
        navegacao("/admin/trips/list")
    }

    return(
        <div>
            <h1>PAGINA INICIAL</h1>
            <button onClick={goToListTripsPage}>lISTA DE VIAJENS</button>
            <button onClick={goToAdminHomePage}>AREA DE ADMINISTRADOR</button>
        </div>
    )

}
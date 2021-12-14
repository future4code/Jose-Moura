import React from "react";
import {useNavigate} from "react-router-dom"
import "./styledHome.css";

export const HomePage = () => {
    const navegacao = useNavigate();

    const goToListTripsPage = () => {
        navegacao("/trips/list");
    }
    const goToAdminHomePage = () => {
        navegacao("/login")
    }

    return(
        <div className="body">
            <div className="corpo-home">
                <div className="logo">
                    <h1>LABE<strong className="xs">X</strong></h1>
                </div>
                <div className="corpo-botao">
                <button className= "botao" onClick={goToListTripsPage}>LISTA DE VIAGENS</button>
                <button className= "botao" onClick={goToAdminHomePage}>AREA DE ADMINISTRADOR</button>
                </div>
            </div>
        </div>
    )

}
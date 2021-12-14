import React, {useState, useEffect} from "react";

import {useNavigate} from "react-router-dom"
import {baseUrl} from "../../constants/index";
import axios from "axios";
import "./styledTrips.css";

export const ListTripsPage = () => {
    const [listTrips,setListTrips] = useState([])

    const Navegacao = useNavigate();
    const goToHomePage = () => {
        Navegacao("/");
    }
    const goToinscricao = () => {
        Navegacao("/trips/application");
    }

    useEffect(() => {
        axios
        .get(`${baseUrl}/trips`)
        .then((res) => {
            setListTrips(res.data.trips);
        })
        .catch((err) => {
            console.log(err);
          });
    },[])

    return(
        <div className="lista-corpo">
            <div className="logot">
                <h1>LABE<strong>X</strong></h1>
            </div>
            <div className="botao">
            <button className="butons" onClick={goToHomePage}>HOME</button>
            <button className="butons" onClick={goToinscricao}>INSCREVER-SE</button>
            </div>
            <div className="corpo-lista">
                <div>
                    <p>
                    {listTrips.map((trips) => {
                        return(
                            <p key = {trips.id} className="container-viagens">
                                <div><strong>nome:</strong> {trips.name}</div>
                                <div><strong>descrição:</strong> {trips.description} </div>
                                <div><strong>data: </strong>{trips.date} </div>
                                <div><strong>duração: </strong>{trips.durationInDays}</div>
                                <div><strong>planeta: </strong>{trips.planet} </div>
                            </p>
                        )
                    })}
                    </p>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )

}
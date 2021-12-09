import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import {baseUrl} from "../../constants/index";
import axios from "axios";
import "./styles.css";

export const ListTripsPage = () => {
    const [listTrips,setListTrips] = useState([])

    const Navegacao = useNavigate();
    const goToHomePage = () => {
        Navegacao("/");
    }

    useEffect(() => {
        axios
        .get(`${baseUrl}/trips`)
        .then((res) => {
            setListTrips(res.data.trips);
            console.log(res.data.trips)
        })
        .catch((err) => {
            console.log(err);
          });
    },[])

    return(

        <div className="lista-corpo">
            <div>
                <h1>LABE<strong>X</strong></h1>
            </div>
            <h2>LISTA DE VIAGENS</h2>
            <div>
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
                    <button onClick={goToHomePage}>HOME</button>
                </div>
            </div>
        </div>
    )

}
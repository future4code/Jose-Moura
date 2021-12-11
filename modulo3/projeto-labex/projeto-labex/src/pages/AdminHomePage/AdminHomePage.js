import React, {useEffect,useState} from "react";
import {useNavigate} from "react-router-dom"
import {baseUrl} from "../../constants/index";
import axios from "axios";
import "./styledAdmin.css";

export const AdminHomePage = () => {
    const [nameTrips, setNameTrips] = useState([])
    const navegacao = useNavigate();

    const goToHomePage = () => {
        navegacao("/");
    }
    const goToListTripsPage = () => {
        navegacao("/trips/list");
    }
    const goToCreatePage = () => {
        navegacao("/admin/trips/create")
    }

    const pegarNameTrips = () => {
        axios
        .get(`${baseUrl}/trips`)
        .then((res) => {
            setNameTrips(res.data.trips);
        })
        .catch((err) => {
            console.log(err);
          });
    }
    useEffect(() => {
        pegarNameTrips();
    },[])

        const deleteTrip = (id) => {
        const idToken = localStorage.getItem("token")

        const axiosConfig = {
            headers:{
                auth: idToken,
                "Content-Type": "application/json"
        }   
        }
        axios
        .delete(`${baseUrl}/trips/${id}`,axiosConfig)
        .then((res) => {
            pegarNameTrips();
            alert("Viagem  apagada com sucesso!");
        })
    }
    useEffect(() => {
        deleteTrip()
    },[])
    return(
        <div class="corpoadmin">
            <div className="titulo-labex">
                <h1>LABE<strong className="x">X</strong></h1>
            </div>
            <div className="buttonAdmin">
            <button onClick={goToHomePage}>HOME</button>
            <button onClick={goToCreatePage}>CRIAR VIAGEM</button>
            <button onClick={goToListTripsPage}>LISTA DE VIAGENS</button>
            </div>

            <p className="listacidade">
                    {nameTrips.map((trips) => {
                        return(
                        <div>
                            <p onClick={() => {navegacao(`/admin/trips/${trips.id}`)}} key = {trips.id} className="container-viagens">
                                <div>{trips.name}</div>
                            </p>
                            <button cclassName="container-botao" onClick={() => {deleteTrip(trips.id)}}>APAGAR</button>
                        </div>
                        )
                    })}
            </p>

        </div>
    )

}
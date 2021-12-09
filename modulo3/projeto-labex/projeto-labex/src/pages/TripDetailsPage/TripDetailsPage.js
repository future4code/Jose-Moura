import React,{useEffect,useState} from "react";
import axios from "axios";
import { baseUrl} from "../../constants";
import "./styled.css"


export const TripDetailsPage = () => {
    const [tripDetails, setTripDetails] = useState({})
    const [aproved, setAproved] = useState([])
    const [pendents,setPendents] = useState([]);

    //Requisição para retornar os detalhes
    const pegaDetalhes = () =>{
        const idToken = localStorage.getItem("token")

        const axiosConfig = {
            headers:{
                auth: idToken
        }   
        }
        axios
        .get(`${baseUrl}/trip/ubxBSypYPoymHFHJPzXq`,axiosConfig)
        .then((res) => {
            setTripDetails(res.data.trip);
            setAproved(res.data.trip.approved);
            setPendents(res.data.trip.candidates);
        })
        .catch(err => {
            console.log(err)
        });
    }


    useEffect(() => {
        pegaDetalhes();
    },[]);

    return(
        <div className="corpo">
            <div className="titulo-labex">
                <h1>LABE<strong className="x">X</strong></h1>
            </div>
            <div className="corpo-detalhes">
                <div className="text-detalhes">
                    <h2>DETALHES</h2>
                    <p><strong>Nome:</strong>{tripDetails.name}</p>
                    <p><strong>Descrição:</strong>{tripDetails.description}</p>
                    <p><strong>Planeta:</strong>{tripDetails.planet}</p>
                    <p><strong>Duração:</strong>{tripDetails.durationInDays}</p>
                    <p><strong>Data:</strong>{tripDetails.date}</p>
                </div>
            </div>
            <div className="candidates">
                <div className="pendentes">
                    <h2>PENDENTES</h2>
                    <p>
                        {pendents.map((pendentes) => {
                            return(
                                <p>{pendentes.name}</p>
                            )
                        })}
                    </p>
                </div>
                <div className="aprovados">
                    <h2>APROVADOS</h2>
                    <p>
                        {aproved.map((aprovados) => {
                            return(
                                <p>
                                    {aprovados.name}
                                </p>
                            )
                        })}
                    </p>
                </div>
            </div>

        </div>
    )

}
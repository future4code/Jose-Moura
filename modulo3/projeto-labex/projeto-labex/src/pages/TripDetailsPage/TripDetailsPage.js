import React,{useEffect,useState} from "react";
import axios from "axios";
import { baseUrl,axiosConfig } from "../../constants";

export const TripDetailsPage = () => {
    const [tripDetails, setTripDetails] = useState([])

    const pegaDetalhes = () =>{
        axios
        .get(`${baseUrl}/trip/:id`,axiosConfig)
        .then((res) => {
            setTripDetails(res.data);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err)
        });
    }
    useEffect(() => {
        pegaDetalhes();
    },[]);
    return(
        <div>
            <h1>DETALHE DAS VIAGENS</h1>
            <p>{tripDetails.name}</p>
        </div>
    )

}
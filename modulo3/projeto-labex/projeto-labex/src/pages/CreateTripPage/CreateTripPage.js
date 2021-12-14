import React,{useState,useEffect} from "react";
import {baseUrl} from "../../constants/index";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./styledCreat.css";

export const CreateTripPage = (props) => {
    const [form, setForm] = useState({name:"",planet:"",date:"",description:"",durationInDays:""})

    const onChangeTrips = (event) => {
        setForm({...form,[event.target.name]: event.target.value})
    }

    const navegacao = useNavigate();
    const gotoAdmin = () => {
        navegacao("/admin/trips/list")
    }

    const criarViagem = (event) => {
        event.preventDefault();

        const idToken = localStorage.getItem("token");
        const axiosConfig = {
            headers:{
                auth: idToken,
                "Content-Type": "application/json"
            } 
        }
        axios
        .post(`${baseUrl}/trips`,form,axiosConfig)
        .then(() => {
            setForm(form.name, form.planet, form.date, form.description, form.durationInDays)
            //setForm({form})
            console.log("DADOS ENVIADO")
        }).catch((err) => {
            console.log(err)
        })
}

    return(
        <div className="corpo-creat">
            <div className="logocreat">
                <h1>LABE<strong>X</strong></h1>
            </div>
            <form className="formularioTrip" onSubmit={criarViagem}>
                <input 
                    className="camposForm"
                    name="name"
                    value={form.name}
                    placeholder="Nome da cidade"
                    type="text"
                    required
                    onChange={onChangeTrips}
                />
                <select className="camposForm" name="planet" value ={form.planet} onChange={onChangeTrips}>
                    <option>Escolha o planeta</option>
                    <option>Mercúrio</option>
                    <option>Vênus</option>
                    <option>Terra</option>
                    <option>Marte</option>
                    <option>Jupiter</option>
                    <option>Saturno</option>
                    <option>Urano</option>
                    <option>Netuno</option>
                    <option>Plutão</option>
                </select>
                <input 
                    className="camposForm"
                    name="date"
                    value = {form.date}
                    placeholder=""
                    type="date"
                    required
                    onChange={onChangeTrips}
                />
                <input 
                    className="camposForm"
                    name="description"
                    value = {form.description}
                    placeholder="Descrição"
                    type="text"
                    required
                    onChange={onChangeTrips}
                />
                <input 
                    className="camposForm"
                    name = "durationInDays"
                    value = {form.durationInDays}
                    placeholder="Duração em dias"
                    type="number"
                    required
                    onChange={onChangeTrips}
                />
                <div className="bottonsCreat">
                <button className = "bottons" onClick={gotoAdmin}>VOLTAR</button>
                <button className = "bottons">CRIAR</button>
                </div>
            </form>    
        </div>
        
    )

}
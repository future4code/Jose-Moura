import React,{useState,useEffect} from "react";
import {baseUrl} from "../../constants/index";
import axios from "axios";
import {useParams} from "react-router-dom"

export const ApplicationFormPage = () => {
    const [nameTrips, setNameTrips] = useState([])
    const [form, setForm] = useState({name:"",age:"",applicationText:"",profession:"",country:""})

    const onChangeUser = (event) => {
        setForm({...form,[event.target.name]:event.target.value})
    }

    const pegarNameTrips = () => {
        axios
        .get(`${baseUrl}/trips`)
        .then((res) => {
            setNameTrips(res.data.trips);
            console.log(res.data.trips)
        })
        .catch((err) => {
            console.log(err);
          });
    }
    useEffect(() => {
        pegarNameTrips();
    },[])


    const createUser = (e) => {
        e.preventDefault();

    const axiosConfig = {
        headers:{
            "Content-Type": "application/json"
        } 
    }
    axios
    .post(`${baseUrl}/trips/${form.id}/apply`,form,axiosConfig)
    .then(() => {
        setForm(form.name, form.age, form.applicationText, form.profession, form.country)
        console.log("DADOS ENVIADO")
    }).catch((err) => {
        console.log(err)
    })
    }
    return(
        <div>
            <h1>FORM DA APLICAÇÃO</h1>
            <form onSubmit={createUser}>
                <select name="id" onChange={onChangeUser}>
                    <option>Escolha uma viagem</option>
                    {nameTrips.map((trip) =>{
                        return(
                        <option key={trip.name} value={trip.id}>{trip.name}</option>
                        )
                    })
                    }
                </select>
                <input 
                    name="name"
                    value={form.name}
                    placeholder="Nome"
                    type="text"
                    onChange={onChangeUser}
                    required
                />
                <input 
                    name="age"
                    value={form.age}
                    placeholder="Idade"
                    type="number"
                    onChange={onChangeUser}
                    required
                />
                <input 
                    name="applicationText"
                    value={form.applicationText}
                    placeholder="Texto da candidatura"
                    type="text"
                    onChange={onChangeUser}
                    required
                />
                <input 
                    name="profession"
                    value={form.profession}
                    placeholder="profissão"
                    type="text"
                    onChange={onChangeUser}
                    required
                />
                <select name="country" onChange={onChangeUser}>
                    <option selected>Escolha um pais</option>
                    <option>Brasil</option>
                    <option>Argentina</option>
                    <option>Estados Unidos</option>
                    <option>Canadá</option>
                    <option>Grécia</option>
                    <option>Itália</option>
                    <option>Paris</option>
                    <option>Uruguai</option>
                    <option>Inglaterra</option>
                    <option>China</option>
                    <option>Japão</option>
                    <option>Alemanha</option>
                    <option>Australia</option>

                </select>
                <button>CRIAR USUARIO</button>
            </form>


        </div>
    )

}

import axios from "axios";
import React,{useEffect, useState} from "react";
import { baseUrl} from "../../constants";
import {useNavigate} from "react-router-dom"
import "./styledLogin.css"

export const LoginPage = () => {
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

    const navegacao = useNavigate();
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handleSenhaChange = e => {
        setSenha(e.target.value);
    }
    
    const handleLoginUser = () => {

        const axiosConfig = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        const body = {
            "email": email,
            "password": senha
        }

        axios
        .post(`${baseUrl}/login`, body, axiosConfig)
        .then((res) => {
            alert(`${email} ESTÁ LOGADO!`)
            setEmail(email);
            setSenha(senha);
            localStorage.setItem("token",res.data.token)
            navegacao("/admin/trips/list");
        }).catch((err) => {
            console.log(err)
        })
    }

    
    useEffect(()=>{
        handleLoginUser()
    },[])

    return(
        <div className="corpo-login">
            <div className="logoLogin">
                <h1>LABE<strong>X</strong></h1>
            </div>
            <div>
            </div>
            <input 
                className="camposl"
                placeholder = "E-mail"
                type="text"
                value={email}
                onChange={handleEmailChange}
            />
            < input 
                className="camposl"
                placeholder = "Senha"
                type = "password"
                value = {senha}
                onChange={handleSenhaChange}
            />
            <button className="botaoentrar"onClick={handleLoginUser}>ENTRAR</button>
        </div>
    )

}
import axios from "axios";
import React,{useEffect, useState} from "react";
import { baseUrl} from "../../constants";

export const LoginPage = () => {
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");

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
            console.log(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }

    
    useEffect(()=>{
        handleLoginUser()
    },[])

    return(
        <div>
            <div>
                <h1>LABE<strong>X</strong></h1>
            </div>
            <div>
            <h1>PÁGINA DE LOGIN</h1>
            </div>
            <input 
                placeholder = "E-mail"
                type="text"
                value={email}
                onChange={handleEmailChange}
            />
            < input 
                placeholder = "Senha"
                type = "password"
                value = {senha}
                onChange={handleSenhaChange}
            />
            <button onClick={handleLoginUser}>ENTRAR</button>

            <p>{senha}</p>
        </div>
    )

}
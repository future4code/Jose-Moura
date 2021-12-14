import React from "react";
import {ScreenCointainer, LogoImg, InputContainer} from "./styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Logo from "../../assets/logo.png";
import useForm from "../../hooks/useForm";


const LoginPage = () => {
    const [form, onChangeInput, clear] = useForm({email:"",password:""})

    const submitForm = (event) => {
        event.preventDefault();
    }

    return(
        <ScreenCointainer>
            <LogoImg src={Logo} alt="logo-cookenu" />
            <InputContainer>
                <form onSubmit={submitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onchange={onChangeInput}
                        label={"E-mail"}
                        variante={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />
                    <TextField
                        name={"password"}
                        value={form.password}
                        onchange={onChangeInput}
                        label={"Senha"}
                        variante={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />
                    <Button
                    type={"submit"}
                    fullWidth
                    variant={"contained"}
                    color={"primary"}
                    >FAZER LOGIN</Button>
                </form>
            </InputContainer>
        </ScreenCointainer>
    )
}

export default LoginPage;
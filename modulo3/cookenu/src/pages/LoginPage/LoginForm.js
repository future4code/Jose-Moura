import React from "react";
import {InputContainer} from "./styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useForm from "../../hooks/useForm";
import {login} from "../../services/user";
import {useHistory} from "react-router-dom";

const LoginForm = ({setRightButtonText}) => {
    const [form, onChange, clear] = useForm({email:"", password:""})
    const history = useHistory()

    const submitForm = (event) => {
        event.preventDefault();
        login(form, clear, history)

    }

    return(
            <InputContainer>
                <form onSubmit={submitForm}>
                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
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
                        onChange={onChange}
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
    )
}

export default LoginForm;
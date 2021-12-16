import React from "react";
import {ScreenCointainer, LogoImg, SignUpButton} from "./styled";
import Button from "@material-ui/core/Button";
import Logo from "../../assets/logo.png";
import LoginForm from "./LoginForm";
import {useHistory} from "react-router-dom";
import {goToSignUp} from "../../routes/coordinator";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({setRightButtonText}) => {
    //useUnprotectedPage()
    const history = useHistory()
    return(
        <ScreenCointainer>
            <LogoImg src={Logo} alt="logo-cookenu" />
            <LoginForm setRightButtonText={setRightButtonText}/>
            <SignUpButton>
            <Button
                onClick = {() => goToSignUp(history)}
                type={"submit"}
                fullWidth
                variant={"text"}
                color={"primary"}>Não possui conta? Cadastre-se</Button>
            </SignUpButton>
        </ScreenCointainer>
    )
}

export default LoginPage;
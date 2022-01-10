import React from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import {SignUpContainer} from "./styled";
import {LogoImg} from "./styled";
import logo from '../../assets/logo.png';
import {SignUpForm} from "./SignUpForm";


const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage();
    return(
        <SignUpContainer>
            <LogoImg src={logo} alt = "logo cookenu"/>
            <SignUpForm setRightButtonText={setRightButtonText}/>
        </SignUpContainer>
    )
}


export default SignUpPage;
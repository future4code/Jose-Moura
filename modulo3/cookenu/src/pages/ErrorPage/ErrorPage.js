import React from "react";
import logoErro  from "../../assets/error.png";
import {ErrorContainer, ErrorImg} from "./styled";
import Typography from '@material-ui/core/Typography'

const ErrorPage = () => {
    return(
        <ErrorContainer>
            <ErrorImg src={logoErro} />
            <Typography color={'primary'} variant={'h4'} align={'center'}>Erro 404 - Página Não Encontrada</Typography>
        </ErrorContainer>
    )
}

export default ErrorPage;
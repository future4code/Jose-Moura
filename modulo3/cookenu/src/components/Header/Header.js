import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {goToRecipeList,goToLogin } from "../../routes/coordinator";
import { useHistory } from 'react-router-dom';


export default function Header({rightButtonText, setRightButtonText}) {
    const history = useHistory();
    const token = localStorage.getItem("token");

    const logout = () => {
      localStorage.removeItem("token")
    }
    const rightButtonAction = () => {
      if(token){
        logout()
        setRightButtonText("Login")
        goToLogin(history)
      }else{
        goToLogin(history)
      }
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
        <Button onClick = {() => {goToRecipeList(history)}} color="inherit" sx={{ flexGrow: 1 }}> Cookenu</Button>
          <Button onClick = {rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
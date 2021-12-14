import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar } from './styled';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {goToRecipeList,goToLogin } from "../../routes/coordinator";
import { useHistory } from 'react-router-dom';


export default function Header() {
    const history = useHistory();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
        <Button onClick = {() => {goToRecipeList(history)}} color="inherit" sx={{ flexGrow: 1 }}> Cookenu</Button>
          <Button onClick = {() => {goToLogin(history)}} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
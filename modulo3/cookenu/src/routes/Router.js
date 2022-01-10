import React from "react";
import AddRecipePage from "../pages/AddRecipesPage/AddRecipePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { Switch, Route } from "react-router-dom";

const Router = ({setRightButtonText}) => {
    return(
            <Switch>
                <Route exact path="/adicionar-receita">
                    <AddRecipePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route exact path="/">
                    <RecipeListPage />
                </Route >
                <Route exact path="/detalhe/:id">
                    <RecipeDetailPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage setRightButtonText={setRightButtonText}/>
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
    )
}

export default Router;
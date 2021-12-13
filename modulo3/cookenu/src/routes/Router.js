import React from "react";
import AddRecipePage from "../pages/AddRecipesPage/AddRecipePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { BrowserRouter,Switch, Route } from "react-router-dom";

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/adicionar-receita">
                    <AddRecipePage />
                </Route >
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/">
                    <RecipeDetailPage />
                </Route>
                <Route exact path="/detalhe/:id">
                    <RecipeListPage />
                </Route>
                <Route exact path="/cadastro">
                    <SignUpPage />
                </Route>
                <Route exact path="/login">
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
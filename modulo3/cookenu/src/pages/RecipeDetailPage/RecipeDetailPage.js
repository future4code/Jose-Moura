import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const RecipeDetailPage = () => {
    useProtectedPage()
    return(
        <div>
            Detalhe das receitas
        </div>
    )
}

export default RecipeDetailPage;
import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddRecipePage = () => {
    useProtectedPage();
    return(
        <div>
            Adicionar Receitas
        </div>
    )
}

export default AddRecipePage;
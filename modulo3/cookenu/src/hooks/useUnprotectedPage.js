import {useHistory} from "react-router-dom";
import {useLayoutEffect} from "react";
import {goToRecipeList } from "../routes/coordinator";

const useUnprotectedPage = () => {
    const history = useHistory();
    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
            if(token){
                goToRecipeList(history)
            }
    }, [history])
}
export default useUnprotectedPage;
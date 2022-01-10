import axios from "axios";
import {goToRecipeList} from "../routes/coordinator";
import {BASE_URL} from "../constants/urls"

export const login = (body, clear, setRightButtonText, history, setIsLoading) => {
    axios
        .post(`${BASE_URL}/user/login`,body)
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            alert(res.data.message)
            clear()
            setIsLoading(false)
            goToRecipeList(history)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err)
        })
}
export const signUp = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true);
    axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        console.log(res.data)
        clear();
        setIsLoading(false);
        goToRecipeList(history);
        setRightButtonText("Logout");
    })
    .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message)
    })
}
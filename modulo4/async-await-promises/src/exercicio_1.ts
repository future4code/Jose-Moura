import axios from "axios";
import {baseURL} from "./baseUrl";

// A)- Endpoint GET
// B)- Promisse<any>

 const  getAllSubscribers = async ():Promise<any> => {
    return await axios
    .get(`${baseURL}/subscribers`)
    .then((res) => {
        console.log(res.data)
    })  
}

getAllSubscribers();     // buscar assinantes
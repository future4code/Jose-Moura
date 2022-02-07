import axios from "axios";
import {baseURL} from "./baseUrl";



//A)- A principal diferenca que eu notei foi onde deve-se colocar a sync. 
//      Já na await permaneceu da mesma forma do exercicio anterior.

 const getAllSubscribers = (async ():Promise<any> => {
    return await axios
    .get(`${baseURL}/subscribers`)
    .then((res) => {
        console.log(res.data)
    })  
})

getAllSubscribers();
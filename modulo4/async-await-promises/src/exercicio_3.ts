import axios from "axios";
import {baseURL} from "./baseUrl";

type user = {
	id: string;
	name: string;
	email: string;
}
//A) - 
const getSubscribers1 = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };
// Retornou Promise { <pending> } e não retornou nenhum dado.

//B)- O any pode ser qualquer tipo. Mapear de outra forma é por que sabemos o que vai retornar.

//C)-
const getSubscribers = (async (): Promise<any> => {
    return await axios
    .get(`${baseURL}/subscribers`)
    .then((res) => {
       console.log(res.data);
    })
  });

 console.log(getSubscribers())
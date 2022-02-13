import axios from "axios";
import { Address } from "../types/Address";

const base_url = "https://viacep.com.br/ws";

export const getAddress = async (cep:string): Promise< Address | null > => {
    try{
        const result = await axios.get(`${base_url}/${cep}/json/`);
        const address: Address = {
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }
        return address;
    }catch(err){
        console.log("Erro no serviço getAdfress", err)
        return null
    }
}

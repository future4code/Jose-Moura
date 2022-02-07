import axios from "axios";
import {baseURL} from "./baseUrl";

// A)- Tipo any

const news = {
    title:"Arvore sobre em gato",
    content:"No deserto...",
    dat: Date.now()
}

const createNews = (news: any) => {
    return axios.put(`${baseURL}/news`, news)
  }


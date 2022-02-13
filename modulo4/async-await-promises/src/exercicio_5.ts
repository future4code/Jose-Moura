import axios from "axios";
import {baseURL} from "./baseUrl";


const notifyAllSubscribers = (ids: string[]) => {

    for (let id of ids) {
      axios
        .post(`${baseURL}/notifications`, {
          subscriberId: id,
          message: "Confira as últimas notícias de Belo Horizonte"
        })
        .then(() => { console.log(`Notificação enviada para ${id}`) })
        .catch(() => { console.log(`Erro ao notificar ${id}`) })
    }
  }
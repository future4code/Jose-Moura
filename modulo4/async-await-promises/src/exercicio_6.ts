import axios from "axios";
import {baseURL} from "./baseUrl";

// A)- etorna uma única Promise que resolve quando todas as promises no argumento 
//     iterável forem resolvidas ou quando o iterável passado como argumento não contém promises

//B)- Por que ele envia tudo de uma vez.

//C)- 
const notifyAllSubscribers = async (ids: string[]): Promise<void> => {

    try {
      const requests = ids.map(id => axios.post(`${baseURL}/notifications`, {
        subscriberId: id,
        message: "Confira as últimas notícias!"
      }))
    
      await Promise.all(requests)

      console.log(`Notifições enviadas`)

    } catch (error) {
      console.log(`Erro ao notificar assinantes`)
    }

}
const main = async (): Promise<void> => {
    try {
      await notifyAllSubscribers(ids)
  
    } catch (err: any) {
      console.log(err.response?.data || err.message)
    }
  }
  main();
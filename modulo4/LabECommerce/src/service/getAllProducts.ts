import axios from 'axios'
import { product } from '../types/product'


export const getAllProducts = async ():Promise<product | null> => {

    try {
        const response = await axios.get(`http://localhost:3003/products`)
    
        const purchase: product = {
            id: response.data.id,
            name: response.data.name,
            price: response.data.price,
            image_url: response.data.image_url 
        }

        return purchase

    } catch (error) {
        console.log("Erro no serviço getAddressInfo:", error)
        return null
    }
}
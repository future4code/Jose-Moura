import { Request, Response } from "express";
import connection from "../connection"

export const createProduct = async (req: Request, res: Response) => {
    try{
        const {name, price, image_url} = req.body;

        await connection 
        .insert({
            id: "PR" + Date.now(),
            name,
            price,
            image_url
        }).into("labecommerce_products")
        
        res.status(200).send(`O produto ${name} foi criado`)
    }catch(error){
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
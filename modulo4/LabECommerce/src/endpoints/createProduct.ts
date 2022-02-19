import { Request, Response } from "express";
import connection from "../connection"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const {name, price, image_url} = req.body;

        if(!name || !price || !image_url){
            errorCode = 422;
            throw new Error("Parametro vazio. Verifique os dados inseridos.");
        }
        if(typeof name !== 'string' || typeof price !== 'string' || typeof image_url !== 'string'){
            errorCode = 400;
            throw new Error("Campos invalidos. Verifique se o tipo está correto!");
        }

        await connection 
        .insert({
            id: "PR" + Date.now(),
            name,
            price,
            image_url
        }).into("labecommerce_products")
        
        res.status(201).send(`O produto ${name} foi criado`)
    }catch(error){
        if (error instanceof Error) {
            res.status(errorCode).send({ message: error.message });
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
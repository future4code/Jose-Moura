import { Request, Response } from "express";
import connection from "../connection"

export const allProducts = async (req: Request, res: Response) => {
    try{
        const products = await connection
        .select("*")
        .from ("labecommerce_products");

        res.status(200).send(products);

    }catch(error){
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }

}
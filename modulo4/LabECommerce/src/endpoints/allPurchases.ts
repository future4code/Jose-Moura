import { Request, Response } from "express";
import connection from "../connection"

export const allPurchases = async (req: Request, res: Response) => {
    let errorCode = 500;

    try{
        const user_id = req.params.user_id;
        if(!user_id){
            errorCode = 422;
            throw new Error("ID do usuario não encontrado ou vazio.");
        }
        const porchases = await connection.raw(`
            SELECT  C.id, C.user_id, C.product_id, P.price, C.quantity, C.total_price, U.name
            FROM labecommerce_purchases C
            INNER JOIN labecommerce_users U ON C.user_id = U.id
            INNER JOIN labecommerce_products P ON C.product_id = P.id
            WHERE C.user_id = '${user_id}'
        `)

        res.status(200).send(porchases[0]);
    }catch(error){
        if (error instanceof Error) {
            res.status(errorCode).send({ message: error.message });
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }

}
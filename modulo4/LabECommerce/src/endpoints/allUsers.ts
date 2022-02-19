import { Request, Response } from "express";
import connection from "../connection"

export const allUsers = async (req: Request, res: Response) => {
    try{
        const users = await connection
        .select("*")
        .from ("labecommerce_users");

        res.status(200).send(users);

    }catch(error){
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }

}
import { Request, Response } from "express";
import connection from "../connection"

export const createUser = async (req: Request, res: Response) => {
    try{
        const {name, email, password} = req.body;

        await connection 
        .insert({
            id: "U" + Date.now(),
            name,
            email,
            password
        }).into("labecommerce_users")
        
        res.status(200).send(`O usuário ${name} foi criado`)
    }catch(error){
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
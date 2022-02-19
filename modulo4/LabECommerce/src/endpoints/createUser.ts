import { Request, Response } from "express";
import connection from "../connection"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 500
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            errorCode = 422;
            throw new Error("Parametro vazio. Verifique os dados inseridos.");
        }
        if(typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string'){
            errorCode = 400;
            throw new Error("Campos invalidos. Verifique se o tipo está correto!");
        }

        await connection 
        .insert({
            id: "U" + Date.now(),
            name,
            email,
            password
        }).into("labecommerce_users")
        
        res.status(201).send(`O usuário ${name} foi criado`)
    }catch(error){
        if (error instanceof Error) {
            res.status(errorCode).send({ message: error.message });
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
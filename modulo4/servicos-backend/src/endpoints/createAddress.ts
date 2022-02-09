import { Request, Response } from "express";
import { getAddress } from "../services/getAddress";
import connection from "../connection";

export const createAddress = async (req:Request, res:Response) => {
    try{
        const { numero, complemento, cep } = req.body;

        const address = await getAddress(cep)
        await connection 
        .insert({
            id: Date.now().toString(),
            Logradouro: address?.logradouro,
            bairro: address?.bairro,
            cep , 
            numero ,
            complemento ,
            cidade: address?.cidade,
            estado: address?.estado
        }).into("endereco")

        res.status(200).send(`A tarefa foi criada com sucesso!`);
    }catch(err){
        if (err instanceof Error) {
            res.send({ err, message: err.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}

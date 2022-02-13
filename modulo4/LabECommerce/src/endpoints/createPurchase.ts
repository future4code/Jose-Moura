import { Request, Response } from "express";
import connection from "../connection"


export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400;
    try{
        const {user_id, product_id, quantity} = req.body;
        
        if(!user_id || !product_id || !quantity){
            errorCode = 422;
            throw new Error("Parametro vazio. Verifique os dados inseridos.");
        }
        if(typeof user_id !== 'string' || typeof product_id !== 'string' || typeof quantity !== 'number'){
            errorCode = 400;
            throw new Error("Campos invalidos. Verifique se o tipo está correto!");
        }

        //Buscando no banco os ID's e os PREÇOS do produtos cadastrados
        const dataProducts = await connection.raw(`
            SELECT id, price FROM labecommerce_products;
        `)

        // Filtrando o ID e o preço que seja igual ao product_id
        const dataFinalProducts = dataProducts[0];
        const price_product = dataFinalProducts.filter((item:any) => {
            return (item.id === product_id)
        })

        const price_total:number = quantity * price_product[0].price;

        await connection 
        .insert({
            id:"PU" + Date.now().toString(),
            user_id,
            product_id,
            quantity,
            total_price: price_total
        })
        .into("labecommerce_purchases")


        res.status(201).send(`A compra foi criada`);
    }catch(error){
        if (error instanceof Error) {
            res.status(errorCode).send({ message: error.message });
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
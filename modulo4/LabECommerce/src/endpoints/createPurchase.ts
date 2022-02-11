import { Request, Response } from "express";
import connection from "../connection"


export const createPurchase = async (req: Request, res: Response) => {
    try{
        const {user_id, product_id, quantity} = req.body;
        const id = "PU" + Date.now();
        
        const result = await connection("labecommerce_products")
        .select("price")
        .where("id", id)

        return result[0]
        }

        
        const calcPrice = await connection
        .sum(quantity, 'labecommerce_products.price')
        .from('labecommerce_purchases')
        .innerJoin('labecommerce_products', 'labecommerce_purchases.product_id', 'labecommerce_products.id')
        .where('purchase_id', `${id}`);

        console.log(calcPrice);
      
        //console.log(calcPrice[0][0].price);
       //const calcPrice_total:number = calcPrice[0][0].price * quantity

        await connection 
        .insert({
            purchase_id:id,
            user_id,
            product_id,
            quantity,
            total_price: calcPrice
        })
        .into("labecommerce_purchases")


        res.status(200).send(`A compra foi criada`);
    }catch(error){
        if (error instanceof Error) {
            res.send({ error, message: error.message })
        } else {
            res.send({ message: "Erro inesperado" })
        }
    }
}
import express from "express";
import cors from "cors";
import { dataProducts,infoProducts } from "./data";

const {v4:generator} = require("uuid");
const app = express();
app.use(express.json());
app.use(cors());

// EXERCICIO 1

app.get("/test",(req, res) => {
    res.send("A API está funcionando!");
})


// EXERCICIO 3

app.post("/products", (req, res) => {
    try{
    const name =  req.body.name;
    const price = req.body.price;

    if(typeof name !== 'string'){
        throw new Error("É obrigatório uma string");
    }
    if(typeof price !== 'number'){
        throw new Error("É obrigatório um number");
    }
    if(price <= 0){
        throw new Error("O preço tem que ser maior que 0");
    }
    const newProduct:infoProducts = {
        id:Date.now().toString(),
        name,
        price
    }

    dataProducts.push(newProduct);
    res.send(dataProducts);
}catch(error: any){
    switch(error.message){
        case "É obrigatório uma string":
            res.status(403)
            break;
        case "É obrigatório um number":
            res.status(403)
            break;
        case "O preço tem que ser maior que 0":
            res.status(403)
            break;
        default:
            res.status(500);
    }
}
}
)



//EXERCICIO 4 
app.get("/", (req, res) => {
    res.send(dataProducts);
})



//EXERCICIO 5
app.put("/products/:id", (req, res) => {
    try{
    const id = req.params.id;
    const price = req.body;

    if(!price){
        throw new Error("O campo é obrigatório")
    }
    if(typeof price !== 'number'){
        throw new Error("É obrigatório um number");
    }
    if(price <= 0){
        throw new Error("O preço tem que ser maior que 0");
    }
    if(id === null){
        throw new Error("Id vazio");
     }
    if(price === null){
        throw new Error("Esse produto não foi encontrado");
    }

    for(let i= 0; i < dataProducts.length; i++){
        if(dataProducts[i].id === id){
            dataProducts[i].price = price;
        }
    }
    console.log(dataProducts);
    res.send(dataProducts)
    }catch(error:any){
        switch(error.message){
            case "O campo é obrigatório":
                res.status(422)
                break;
            case "É obrigatório um number":
                res.status(403)
                break;
            case "O preço tem que ser maior que 0":
                res.status(403)
                break;
            case "Id vazio":
                res.status(404)
                break;
            case "Esse produto não foi encontrado":
                res.status(404)
                break
            default:
                res.status(500)
        }
    }
})



//EXERCICIO 6
app.delete("/products/:id",(req, res) => {
    const id = req.params.id;
    for(let i =0; i < dataProducts.length; i++){
        if(dataProducts[i].id === id){
            dataProducts.splice(i, 1);
        }
    }
    res.send(dataProducts);
});



app.listen(3033, () => {
    console.log("RODANDO NA PORTA 3033")
})

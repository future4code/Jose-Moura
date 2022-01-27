import Express, {Request, Response} from "express";
import cors from "cors";
import {users,dataUsers, userTypes} from "./data";

const app = Express();

app.use(Express.json());
app.use(cors());

//EXERCICIO 1
app.get("/users", (req, res) => {
    res.send(users);
})
//ITEM A - METODO GET
//ITEM B - /USERS


//EXERCICIO 2
app.get("/users/:type",(req:Request, res: Response) => {
    let errorCode = 400
    try{
        const type:string = req.params.type.toUpperCase();
        if(!type || typeof type === "number"){
            throw new Error("Tipo invalido ou vazio!")
        }
        if(type !== "ADMIN" && type !== "NORMAL"){
            errorCode = 422;
            throw new Error("Tipo não encontrado!")
        }
        const filterType:dataUsers[] = users.filter((item) => {
            return item.type === type
        })

        res.status(200).send(filterType);
    }catch(error:any){
        res.status(errorCode).send({message: error.message});
    }
})
//ITEM A - Passei pelo req.params, por que o req.params contém parâmetros de rota (na parte do caminho do URL)
//ITEM B - Usando o IF para verificar


//EXERCICIO 3
app.get("/users", (req, res) => {
    let errorCode = 400;
    try{
    const nome = req.query.name;
    if(!nome || typeof nome !== "string"){
        errorCode = 422
        throw new Error("Nome não encontrado")
    }
    const searchName = users.filter((item) => {
        return item.name === nome
    })
    res.status(200).send(searchName);
    }catch(error: any){
        res.status(errorCode).send({message: error.message});
    }
})
//ITEM A - Usando o req.query por que contém os parâmetros de consulta de URL (depois de ? no URL)
//ITEM B - 


//EXERCICIO 4
app.put("/users", (req:Request, res:Response) => {
    let errorCode = 400;
    try{
        const {id, name, email, type, age} = req.body
        if(!id || !name || !email || !type || !age){
            errorCode = 422;
            throw new Error("Um ou mais itens do cadastro está vazio!")
        }

        users.push({id: users.length +1, name, email, type, age});

        res.status(200).send(users);
    }catch(error:any){
        res.status(errorCode).send({message: error.message});
    }
});
//ITEM A - No meu codigo retornou o erro que um ou itens estão vazios
//ITEM B - Não. O PUT substitui um arquivo (ou recurso).


app.listen(3033, () => console.log("RODANDO NA PORTA 3033"));

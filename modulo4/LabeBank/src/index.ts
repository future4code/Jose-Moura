import express, {Response, Request} from "express";
import cors from "cors";
import { users, payments, TypeCount } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/users", (req:Request, res: Response) => {
    const errorCode = 400;
    try{
        const {name, cpf} = req.body

        if(!name || !cpf){

        }

        const dataUser = users.filter((item) => {
            return name === item.nome && cpf === item.cpf
        })
        const balanceUser = dataUser.map((item) => {
            return `Olá cliente ${item.nome} seu saldo é ${item.balance}`
        })

        res.status(200).send(balanceUser)
    }catch(error: any){
        res.status(errorCode).send(error.message)
    }
})
/*
app.post("/", (req:Request, res: Response) => {
    try{
    const {name, cpf, dataNascimento} = req.body;
    

    }catch(error:any){
        
    }
})
*/

app.listen(3033, () => console.log("RODANDO NA PORTA 3033"));
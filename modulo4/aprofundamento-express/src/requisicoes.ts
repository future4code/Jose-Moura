import express,{Request,Response} from "express";
import cors from "cors";
import {listAfazeres} from "./data";

const app = express();

app.use(express.json());
app.use(cors());



app.get("/ping", (req:Request, res:Response) => {
    res.send("PONG")
})

//Retorna os afazeres  concluidos
app.get("/", (req:Request, res:Response) => {
    const completed:any = listAfazeres.filter((item:any) => {
        return item.completed
    })
    res.send(completed);
})

//Inserir uma nova tarefa
app.post("/afazer", (req:Request, res:Response):any => {
    for(let i = 0; i < listAfazeres.length; i++){
        listAfazeres[i].afazer.push({
                userId: 4,
                id:1,
                title:"estudar backend",
                completed: true
            })
    }
    res.send({listAfazeres});
})

app.listen(3033, () => {
    console.log("Rodando na porta 3033");
});

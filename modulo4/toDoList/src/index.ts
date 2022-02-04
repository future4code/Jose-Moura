import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());


//Criar um usuario
app.put("/user",async(req:Request,res:Response): Promise<void> => {
    
    try{
    const {name, nickname, email} = req.body;
    await connection
    .insert({
        id: Date.now().toString(),
        name,
        nickname,
        email
    }).into("users");
    res.status(200).send(`O usuário ${name} foi criado`)
    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

//Pegando usuario/nickname  pelo ID 
app.get("/user/:id",async(req:Request,res:Response):Promise<void> => {
    try{
        const id:string = req.params.id;
        const user = await connection("users")
        .where({id: id})
        .select("id", "nickname");

        res.status(200).send(user);
    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

//Atualizar o name, nickname pelo ID
app.post("/user/edit/:id", async(req:Request,res:Response):Promise<void> => {
    const id:string = req.params.id;
    const{name,nickname} = req.body
    try{
        await connection("users")
        .update({
            name,
            nickname
        }).where({id: id});
        res.status(200).send({message:"O usuário Atualizado"})
    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

//Adicionar uma tarefa
app.post("/task", async(req:Request,res:Response):Promise<void> => {
    
    try{
    const {title, description, limitDate, creatorUserId} = req.body;
    await connection
    .insert({
        id: Date.now().toString(),
        title,
        description,
        limitDate: limitDate.split('/').reverse().join('/'),
        creatorUserId
    }).into("tasks");

    res.status(200).send(`A tarefa ${title} foi criada com sucesso!`);
    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

app.get("/task/:id",async(req:Request,res:Response):Promise<void> => {
    try{
        const id:string = req.params.id;
        const task = await connection('tasks')
        .where({id: id})
        .select("*");
    
        res.status(200).send(task);
    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});


app.listen(3003, () => console.log("Rodando na porta 3003"));
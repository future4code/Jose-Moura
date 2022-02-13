import express, {Request, Response} from "express";
import cors from "cors";
import connection from "./connection";

const app = express();
app.use(express.json());
app.use(cors());


//Criar um usuario
app.put("/user",async(req:Request,res:Response): Promise<void> => {
    let errorCode = 400;
    try{
    const {name, nickname, email} = req.body;
    if(!name || !nickname || !email){
        errorCode = 422;
        throw new Error('Campos vazios. Verifique novamente!');
    }

    await connection
    .insert({
        id: Date.now().toString(),
        name,
        nickname,
        email
    }).into("users");
    res.status(201).send(`O usuário ${name} foi criado`)
    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

//Pegando usuario/nickname  pelo ID 
app.get("/user/:id",async(req:Request,res:Response):Promise<void> => {
    let errorCode = 400;
    try{
        const id:string = req.params.id;

        const user = await connection("users")
            .where({id: id})
            .select("id", "nickname");

        if(!user){
            errorCode = 404;
            throw new Error('Usuário não encontrado. Verifique novamente!');
        }
        res.status(200).send(user);
    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

//Edita um usuario
app.post("/user/edit/:id", async(req:Request,res:Response):Promise<void> => {
    let errorCode = 400;
    try{
        const id:string = req.params.id;
        const{name,nickname} = req.body;
        if(!name || !nickname){
            errorCode = 422;
            throw new Error('Campos vazios. Verique novamente!')
        }
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

//Buscar todos o usuários
app.get("/user/all",async(req:Request,res:Response):Promise<void> => {

    try{
        const user = await connection.raw(`
        SELECT * FROM users
      `);

        res.status(200).send(user[0]);
    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
})

//Adicionar uma tarefa
app.post("/task", async(req:Request,res:Response):Promise<void> => {
    let errorCode = 400
    try{
    const {title, description, limitDate, creatorUserId} = req.body;
    if(!title || !description || !limitDate || !creatorUserId){
        errorCode = 422;
        throw new Error("Campos vazios. Verifique!")
    }
    await connection
    .insert({
        id: Date.now().toString(),
        title,
        description,
        limitDate: limitDate.split('/').reverse().join('/'),
        creatorUserId
    }).into("tasks");

    res.status(201).send(`A tarefa ${title} foi criada com sucesso!`);
    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});

//Busca um usuario pelo ID
app.get("/task/:id",async(req:Request,res:Response):Promise<void> => {
    let errorCode = 400;
    try{
        const id:string = req.params.id;
        const task = await connection('tasks')
        .join('users as u', 'u.id', 'tasks.id')
        .select('tasks.id', 'tasks.title', 'u.nickname')
        .where({'tasks.id': id})
        
        if(!task){
            errorCode = 404;
            throw new Error('Tarefa não encontrada!');
        }
        
        res.status(200).send(task[0][0]);
    }catch(error:any){
        res.status(500).send(error.sqlMessage || error.message);
    }
});



app.listen(3003, () => console.log("Rodando na porta 3003"));
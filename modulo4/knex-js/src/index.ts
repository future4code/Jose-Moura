import express, { Response, Request } from "express";
import cors from "cors";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/actor/:name", async (req:Request, res:Response):Promise<void> => {
    
    try{
        const name = req.params.name
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = ${name}
        `);
        res.status(200).send({ message: result[0] });

    }catch(err:any){
        console.log(err.message)
        res.status(500).send("Unexpected error");
    }    
})
/*
app.get("/actor/:gender", async (req:Request, res:Response):Promise<void> => {
    try{
        const gender:String = req.params.gender
        const result = await connection.raw(`
            SELECT COUNT(*) as QTD FROM Actor WHERE gender = ${gender}
        `);
        res.status(200).send({ message: result[0] });
        console.log(result[0])

    }catch(err:any){
        console.log(err.message)
        res.status(500).send("Unexpected error");
    }    
})
*/
app.put("/actor/:id", async (req:Request, res:Response):Promise<void> =>{
    try{
        await connection("Actor")
        .update({
            salary: req.body.salary,
        })
        .where({id: req.params.id})
        res.status(200).send({ message: "Ator atualizado" });

    }catch(error:any){
    res.status(500).send(error.sqlMessage || error.message);
    console.log(error.sqlMessage)
    }

});
app.delete("/actor/:id",  async (req:Request, res:Response):Promise<void> =>{
    try {
        await connection("Actor").where({ id: req.params.id }).delete();
        res.status(200).send({ message: "ator deletado" });
      } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message);
      }
})
app.get("/actor/:gender", async (req:Request, res:Response):Promise<void> => {
    try{
        const gender:String = req.params.gender
        const result = await connection.raw(`
            SELECT AVG(salary) as MEDIA_SALARIO FROM Actor WHERE gender = ${gender}
        `);
        res.status(200).send({ message: result[0] });
        console.log(result[0])

    }catch(err:any){
        console.log(err.message)
        res.status(500).send("Unexpected error");
    }    
})
app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
  app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateSalary(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
app.listen(3033, () => console.log('RODANDO NA PORTA 3033'));


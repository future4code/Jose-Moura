import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


app.listen(3033, () => console.log("RODANDO NA PORTA 3033"));
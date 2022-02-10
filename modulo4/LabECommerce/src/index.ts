import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createUser } from "./endpoints/createUser";
import { allUsers } from "./endpoints/allUsers";
import { createProduct } from "./endpoints/createProduct";
import { allProducts } from "./endpoints/allProducts";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//Criar usuario
app.post("/users", createUser);
// Mostrar todos os usuários
app.get("/users", allUsers);

//Criar um produto
app.post("/products", createProduct);
//Mostrar toda a lista de clientes cadastrados no banco
app.get("/products", allProducts);


app.listen(process.env.PORT || 3003, () => console.log("RODANDO NA PORTA", process.env.PORT || 3003))
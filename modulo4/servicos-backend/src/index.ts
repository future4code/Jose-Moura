import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createAddress } from "./endpoints/createAddress";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

app.listen(process.env.PORT || 3003, () => {
    console.log("Rodando na porta: ", process.env.PORT || 3003)
}) 

app.post("/address", createAddress);


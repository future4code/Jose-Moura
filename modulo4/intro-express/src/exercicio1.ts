import  express  from "express";
import cors from "cors";
import {users} from "./data";

const app = express();
app.use(express.json())
app.use(cors());


app.get("/", (req, res) => {
    const showUsers = users;
    const allUser = showUsers.map((user) => {
        return user.name;
    }).flat(1);
    res.status(200).send(allUser);
})

app.listen(3030, () => {
    console.log("Projeto rodando na porta 3030");
})

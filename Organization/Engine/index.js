import express from "express";
import dotenv from "dotenv";
import { connection } from "./mongoose.connection.js";
import userRouter from "./user/user.route.js";
import cors from 'cors'

const app = express();
app.use(express.json());
dotenv.config();
connection();

app.use(cors());
app.use('/user',userRouter);

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`App is listening at ${PORT}`);
})
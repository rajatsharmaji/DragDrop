import express from "express";
import dotenv from "dotenv";
import { connection } from "./mongoose.connection.js";

const app = express();
dotenv.config();
connection();

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`App is listening at ${PORT}`);
})
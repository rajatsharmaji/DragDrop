import express from "express";
import dotenv from "dotenv";
import { connection } from './mongoose.connection.js';
import projectRouter from "./grapejs/project.route.js";
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
dotenv.config();
connection();

// Enable CORS for requests from http://localhost:5173/
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

// Body parser middleware for parsing application/json
app.use(bodyParser.json());

// Body parser middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Add an OPTIONS method handler for preflight requests
app.options('*', cors());

// Route handling
app.use('/', projectRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});

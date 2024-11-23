import express from 'express';
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

const app = express();
app.use(bodyParser.json());
dotenv.config();

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
});
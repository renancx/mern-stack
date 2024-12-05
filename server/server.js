import express from 'express';
import dotenv from "dotenv";
import path from "path";
import { connectDB } from './config/db.js';
import ProductRoute from './routes/ProductRoute.js';
import cors from 'cors';

const __dirname = path.resolve();

const app = express();
app.use(express.json());

dotenv.config();

app.use(cors());

app.use('/api/products', ProductRoute);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    });
}

app.listen(process.env.PORT, () => {
    connectDB();
    console.log('Server is running on port ' + process.env.PORT);
});
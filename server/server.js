import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import ProductRoute from './routes/ProductRoute.js';

const app = express();
app.use(express.json());

dotenv.config();

app.use('/api/products', ProductRoute);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log('Server is running on port ' + process.env.PORT);
});
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/",postRoutes);
app.use("/",userRoutes);
app.use(express.static("uploads"));

const start = async() => {
    const connectDB = await mongoose.connect("mongodb+srv://hemantschauhan042_db_user:84lRNP7W3H3Nhn5B@networkx.smrfgqs.mongodb.net/?retryWrites=true&w=majority&appName=Networkx");

    app.listen(9090, () => {
        console.log(`Server listening on Port: 9090`)
    })

}   
start();
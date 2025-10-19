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
    try {
    await mongoose.connect(
      "mongodb+srv://hemantschauhan042_db_user:84lRNP7W3H3Nhn5B@networkx.smrfgqs.mongodb.net/?retryWrites=true&w=majority&appName=Networkx"
    );
    console.log("✅ MongoDB connected successfully!");

    // ✅ Use Render’s provided PORT (important!)
    const PORT = process.env.PORT || 9090;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err);
    process.exit(1);
  }
}   
start();
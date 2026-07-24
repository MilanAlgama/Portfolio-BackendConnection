import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/database.js";
import projectRoutes from "./routes/projectRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import mongoose from "mongoose";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4000;

//connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running" });
});

app.use("/projects", projectRoutes);

app.use(errorHandler);



async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");

    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
      console.log();
      
    });
  } catch (error) {
    console.log(`An error occured: ${error}`);
    process.exit(1);
    
  }
}
startServer();

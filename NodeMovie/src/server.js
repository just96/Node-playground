import express from "express";
import { connectDataBase } from "./config/dataBase.js";
import moviesRoutes from "./routes/moviesRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDataBase();
// middleware to access data from req.body
app.use(express.json());

app.use("/api/movies", moviesRoutes);

app.listen(PORT, () => {
  console.log("SERVER LISTENING ON PORT", PORT);
});

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDataBase } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDataBase();

// middleware so I can access and manipulate data from req.body
app.use(express.json());

app.use("/api/notes", notesRoutes);

// If I wanted to add more routes
// app.use('/api/products',productRoutes)
// then create productRoutes and respective controllers

app.listen(PORT, () => {
  console.log("Server started on PORT", PORT);
});

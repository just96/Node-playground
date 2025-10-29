import express from "express";
import {
  getAllMovies,
  getCurrentMovie,
  createMovie,
  editMovie,
  deleteMovie,
} from "../controllers/moviesControllers.js";

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getCurrentMovie);
router.post("/", createMovie);
router.put("/:id", editMovie);
router.delete("/:id", deleteMovie);

export default router;

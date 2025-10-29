import express from "express";
import { createNote, getAllNotes, getCurrentNote, updateNote, deleteNote } from "../controllers/notesControllers.js";
const router = express.Router();

// Endpoint is a combination of URL + HTTP method that lets the client interact with specific resource

router.get("/", getAllNotes);
router.get("/:id", getCurrentNote);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

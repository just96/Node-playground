import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const allNotes = await Note.find().sort({ updatedAt: -1, createdAt: -1 }); // Updated first && Newest first
    res.status(200).json({ message: "All notes here", allNotes });
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getCurrentNote(req, res) {
  try {
    const { id } = req.params;
    const currentNote = await Note.findById(id);
    if (!currentNote) return res.status(404).json({ message: "Note not found!" });
    res.status(200).json({ message: "Your current note is", currentNote });
  } catch (error) {
    console.error("Error in getCurrentNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const savedNote = await note.save();
    res.status(201).json({ message: "Note created successfully!", savedNote });
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
    if (!updatedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note updated successfully!", updatedNote });
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { id } = req.params;
    const deleteNote = await Note.findByIdAndDelete(id);
    if (!deleteNote) res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully!", deleteNote });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

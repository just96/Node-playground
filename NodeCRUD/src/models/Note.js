import mongoose from "mongoose";

// 1- Create Schema
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  // createdAt & updatedAt
  { timestamps: true }
);

// 2- Create model based of schema
const Note = mongoose.model("Note", noteSchema);

export default Note;

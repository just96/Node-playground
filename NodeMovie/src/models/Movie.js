import mongoose from "mongoose";

// Create Schema
const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    genre: String,
  },
  { timestamps: true }
);

// Create model based on schema
const Movie = mongoose.model("Movie", movieSchema);

export default Movie;

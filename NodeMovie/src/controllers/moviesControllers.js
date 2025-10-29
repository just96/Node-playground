import Movie from "../models/Movie.js";

export async function getAllMovies(req, res) {
  try {
    const allMovies = await Movie.find().sort({ updatedAt: -1, createdAt: -1 });
    if (allMovies.length === 0) return res.status(404).json({ message: "No movies found!" });
    res.status(200).json({ message: "These are all the movies", allMovies });
  } catch (error) {
    console.error("Error in getAllMovies controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getCurrentMovie(req, res) {
  try {
    const { id } = req.params;
    const currentMovie = await Movie.findById(id);
    if (!currentMovie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json({ message: "This is your movie", currentMovie });
  } catch (error) {
    console.error("Error in getCurrentMovie controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createMovie(req, res) {
  try {
    const { title, year, genre } = req.body;
    const movie = new Movie({ title, year, genre });
    const newMovie = await movie.save();
    res.status(201).json({ message: "Movie created successfully!", newMovie });
  } catch (error) {
    console.error("Error in createMovie controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function editMovie(req, res) {
  try {
    const { id } = req.params;
    const { title, year, genre } = req.body;
    const editMovie = await Movie.findByIdAndUpdate(id, { title, year, genre }, { new: true });
    if (!editMovie) return res.status(404).json({ message: "Note not found!" });
    res.status(200).json({ message: "Movie updated successfully!", editMovie });
  } catch (error) {
    console.error("Error in editMovie controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteMovie(req, res) {
  try {
    const { id } = req.params;
    const removeMovie = await Movie.findByIdAndDelete(id);
    if (!removeMovie) return res.status(404).json({ message: "Note not found!" });
    res.status(200).json({ message: "Movie deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteMovie controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

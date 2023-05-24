const movies = require("../models/moviesModel");

const getMovies = async (req, res) => {
  try {
    const movie = await movies.find();
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addMovies = async (req, res) => {
  try {
    const { name, language, releasedDate, picture, location } = req.body;
    // if (!name || !language || releasedDate || !picture || location) {
    //   throw new Error("You missed entering one of the fields");
    // }

    const amovie = await movies.create({
      name,
      language,
      releasedDate,
      picture,
      location,
    });
    res.status(200).json(amovie);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};
const updateMovies = async (req, res) => {
  try {
    res.status(200).json({ massege: "method", app: "Update" });
  } catch {
    res.status(400).json({ error: "not found" });
  }
};
const deleteMovies = async (req, res) => {
  try {
    res.status(200).json({ massege: "method", app: "Delete" });
  } catch {
    res.status(400).json({ error: "not found" });
  }
};
const movieget = async (req, res) => {
  try {
    res.status(200).json({ massege: `get movie for ${req.params.id}` });
  } catch {
    res.status(400).json({ error: "not found" });
  }
};
const movieadd = async (req, res) => {
  try {
    // throw an erorr if the user didn't enter some fields
    const { name, language, releasedDate, picture } = req.body;
    if (!name || !language || !picture) {
      // the next error massege is not in json format, it's in html format so we need to create a cutome middleware which is going to accept req res and transform the res into a json
      throw new Error("you missed entering one of the fields");
    }
    res.status(200).json({ massege: `add movie for ${req.params.id}` });
  } catch {
    res.status(400).json({ error: "not found" });
  }
};
const movieUpdate = async (req, res) => {
  try {
    res.status(200).json({ massege: `update movie for ${req.params.id}` });
  } catch {
    res.status(400).json({ error: "not found" });
  }
};
const movieDelete = async (req, res) => {
  try {
    res.status(200).json({ massege: `delete movie for ${req.params.id}` });
  } catch {
    res.status(400).json({ error: "not found" });
  }
};

module.exports = {
  getMovies,
  addMovies,
  updateMovies,
  deleteMovies,
  movieget,
  movieadd,
  movieUpdate,
  movieDelete,
};

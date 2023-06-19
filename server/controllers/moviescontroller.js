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
    const { name, language, description, duration, cast, location, picture } =
      req.body;
    const amovie = await movies.create({
      name,
      language,
      description,
      duration,
      cast,
      location,
      picture,
    });
    res.status(200).json(amovie);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};
// const updateMovies = async (req, res) => {
//   try {
//     res.status(200).json(req.body);
//   } catch {
//     res.status(400).json({ error: "not found" });
//   }
// };
// const deleteMovies = async (req, res) => {
//   try {
//     res.status(200).json({ massege: "method", app: "Delete" });
//   } catch {
//     res.status(400).json({ error: "not found" });
//   }
// };
const movieget = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movies.findById(id);
    res.status(200).json(movie);
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
// update or edit movie
const movieUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movies.findByIdAndUpdate(id, req.body);
    if (!movie) {
      return res.status(404).json({ message: `${id} not found` });
    }
    const updatedMovie = await movies.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedMovie);
    // res.status(200).json({ massege: `update movie for ${req.params.id}` });
  } catch {
    res.status(500).json({ message: err.massege });
  }
};
const movieDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movies.findOneAndDelete({ _id: id });
    if (!movie) {
      return res.status(404).json({ message: ` ${id} not fount` });
    }
    await movies.findByIdAndDelete(id);
    res.status(200).json({ message: `${id} deleted successfully` });

    // res.status(200).json({ massege: `delete movie for ${req.params.id}` });
  } catch {
    res.status(400).json({ error: "not found" });
  }
};

module.exports = {
  getMovies,
  addMovies,
  // updateMovies,
  // deleteMovies,
  movieget,
  movieadd,
  movieUpdate,
  movieDelete,
};

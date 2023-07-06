const movies = require("../models/moviesModel");
const sharp = require("sharp");

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
    const {
      name,
      language,
      description,
      duration,
      cast,
      location,
      picture,
      type,
    } = req.body;

    // Resize and compress the image
    const resizedPictureBuffer = await sharp(picture)
      .resize(400, 200) // Adjust the desired dimensions
      .jpeg({ quality: 80 }) // Adjust the desired compression quality (0-100)
      .toBuffer();

    // Convert the resized image buffer to a base64-encoded string
    const resizedPicture = `data:image/jpeg;base64,${resizedPictureBuffer.toString(
      "base64"
    )}`;

    const amovie = await movies.create({
      name,
      language,
      description,
      duration,
      cast,
      location,
      picture: resizedPicture, // Use the resized image in the database
      type,
    });

    res.status(200).json(amovie);
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
};

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
    const {
      name,
      language,
      description,
      duration,
      cast,
      location,
      picture,
      type,
    } = req.body;
    if (!name || !language || !picture) {
      throw new Error("you missed entering one of the fields");
    }
    res.status(200).json({ message: `add movie for ${req.params.id}` });
  } catch {
    res.status(400).json({ error: "not found" });
  }
};

const movieUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movies.findByIdAndUpdate(id, req.body);
    if (!movie) {
      return res.status(404).json({ message: `${id} not found` });
    }
    const updatedMovie = await movies.findByIdAndUpdate(id, req.body);
    res.status(200).json(updatedMovie);
  } catch {
    res.status(500).json({ message: err.message });
  }
};

const movieDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movies.findOneAndDelete({ _id: id });
    if (!movie) {
      return res.status(404).json({ message: ` ${id} not found` });
    }
    await movies.findByIdAndDelete(id);
    res.status(200).json({ message: `${id} deleted successfully` });
  } catch {
    res.status(400).json({ error: "not found" });
  }
};

module.exports = {
  getMovies,
  addMovies,
  movieget,
  movieadd,
  movieUpdate,
  movieDelete,
};

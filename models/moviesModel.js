const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter the movie name"],
  },
  language: {
    type: String,
    required: [true, "enter the movie language"],
  },

  picture: {
    type: String,
    required: [true, "enter the picture"],
  },
  location: {
    type: String,
    required: [true, "enter the location"],
  },
});

module.exports = mongoose.model("movies", movieSchema);

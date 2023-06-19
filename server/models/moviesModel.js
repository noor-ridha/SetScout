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
  description: {
    type: String,
    required: [true, "enter the movie language"],
  },
  duration: {
    type: String,
    required: [true, "enter the location"],
  },
  cast: {
    type: String,
    required: [true, "enter the location"],
  },
  location: {
    type: Array,
    required: [true, "enter the location"],
  },

  picture: {
    type: String,
    required: [true, "enter the picture"],
  },
});

module.exports = mongoose.model("movies", movieSchema);

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
    required: [true, "enter the duration"],
  },
  cast: {
    type: String,
    required: [true, "enter the cast"],
  },
  location: {
    type: Array,
    required: [true, "enter the location"],
  },

  picture: {
    type: String,
    required: [true, "enter the picture"],
  },
  type: {
    type: String,
    required: [true, "enter the type"],
  },
});

module.exports = mongoose.model("movies", movieSchema);

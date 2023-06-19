const express = require("express");
const router = express.Router();
const {
  getMovies,
  addMovies,
  // updateMovies,
  // deleteMovies,
  movieget,
  movieadd,
  movieUpdate,
  movieDelete,
} = require("../controllers/moviescontroller");

router.get("/movies", getMovies);
router.post("/movies", addMovies);
// router.patch("/movies", updateMovies);
// router.delete("/movies", deleteMovies);
router.get("/movies/:id", movieget);
router.post("/movies/:id", movieadd);
router.patch("/movies/:id", movieUpdate);
router.delete("/movies/:id", movieDelete);

module.exports = router;

const express = require("express");
const app = express();
const router = express.Router();
const {
  getMovies,
  addMovies,
  updateMovies,
  deleteMovies,
  movieget,
  movieadd,
  movieUpdate,
  movieDelete,
} = require("../controllers/moviescontroller");

router.get("/movies", getMovies);
router.post("/movies", addMovies);
router.patch("/movies", updateMovies);
router.delete("/movies", deleteMovies);
router.get("/:id", movieget);

router.post("/:id", movieadd);
router.patch("/:id", movieUpdate);
router.delete("/:id", movieDelete);

module.exports = router;

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

router.get("/", getMovies);
router.post("/", addMovies);
router.patch("/", updateMovies);
router.delete("/", deleteMovies);
router.get("/:id", movieget);

router.post("/:id", movieadd);
router.patch("/:id", movieUpdate);
router.delete("/:id", movieDelete);

module.exports = router;

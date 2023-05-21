const getMovies = (req, res) => {
  res.status(200).json({ massege: "method", app: "get" });
};

const addMovies = (req, res) => {
  //   console.log(req.body);
  res.status(200).json({ massege: "method", app: "post" });
};
const updateMovies = (req, res) => {
  res.status(200).json({ massege: "method", app: "Update" });
};
const deleteMovies = (req, res) => {
  res.status(200).json({ massege: "method", app: "Delete" });
};
const movieget = (req, res) => {
  res.status(200).json({ massege: `get movie for ${req.params.id}` });
};
const movieadd = (req, res) => {
  res.status(200).json({ massege: `add movie for ${req.params.id}` });
};
const movieUpdate = (req, res) => {
  res.status(200).json({ massege: `update movie for ${req.params.id}` });
};
const movieDelete = (req, res) => {
  res.status(200).json({ massege: `delete movie for ${req.params.id}` });
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

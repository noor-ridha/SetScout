const express = require("express");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ massege: "method", app: "get" });
});
router.post("/", (req, res) => {
  //   console.log(req.body);
  res.status(200).json({ massege: "method", app: "post" });
});
router.patch("/", (req, res) => {
  res.status(200).json({ massege: "method", app: "patch" });
});
router.delete("/", (req, res) => {
  res.status(200).json({ massege: "method", app: "delete" });
});
router.get("/:id", (req, res) => {
  res.status(200).json({ massege: `get movie for ${req.params.id}` });
});

router.post("/:id", (req, res) => {
  res.status(200).json({ massege: `post movie for ${req.params.id}` });
});
router.patch("/:id", (req, res) => {
  res.status(200).json({ massege: `patch movie for ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.status(200).json({ massege: `delete movie for ${req.params.id}` });
});

module.exports = router;

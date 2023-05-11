const express = require("express");
const app = express();

//create the route
// http method
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ massege: "hello noor this is your server", app: "movies site" });
});
app.post("/", (req, res) => {
  res.send("here is the post method");
});
const port = 3000;
// the call back function will be called as soon as the server starts listening
app.listen(port, () => {
  console.log(`your application is running on port ${port}`);
});

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//create the route
// http method
app.get("/", (req, res) => {
  res.status(200).json({ massege: "Home Page", app: "movies site" });
});
app.get("/movie", (req, res) => {
  res.send("single movie page");
});
app.post("/", (req, res) => {
  res.send("here is the post method");
});

// connect to mongoDB
mongoose
  .connect(
    "mongodb+srv://noor:Adminnoor1000@cluster0.gxkmxat.mongodb.net/NodeApi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
    const port = 3000;
    // the call back function will be called as soon as the server starts listening
    app.listen(port, () => {
      console.log(`your application is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

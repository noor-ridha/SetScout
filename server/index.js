const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require("./config/connect");
const handleError = require("./middleware/handlerror");
app.use(express.json());
connection();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/", require("./routes/route"));
app.use(handleError);
const port = 3000;
// the call back function will be called as soon as the server starts listening
app.listen(port, () => {
  console.log(`your application is running on port ${port}`);
});

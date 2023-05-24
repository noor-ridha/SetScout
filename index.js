const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connection = require("./config/connect");
const handleError = require("./middleware/handlerror");
app.use(express.json());
connection();

app.use("/", require("./routes/route"));
app.use(handleError);
const port = 3000;
// the call back function will be called as soon as the server starts listening
app.listen(port, () => {
  console.log(`your application is running on port ${port}`);
});

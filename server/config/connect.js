const mongoose = require("mongoose");
require("dotenv/config");
// connect to mongoDB
const connection = async () => {
  try {
    const connectdb = await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to the database");
  } catch (err) {
    console.log(err);

    process.exit(1);
  }
};

module.exports = connection;

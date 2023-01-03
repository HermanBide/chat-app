const mongoose = require("mongoose");
const dotenv = require('dotenv');
// import * as dotenv from 'dotenv'

require("dotenv").config()


mongoose
  .connect(`mongodb+srv://${process.env.DB_User}:${process.env.DB_PW}@chat-app.kp3ynbr.mongodb.net/chatApp?retryWrites=true&w=majority`,{ useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log("Successfully connected to mongoDB."))
  .catch((e) => console.error("MongoDB Connection Error: ", e.message));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
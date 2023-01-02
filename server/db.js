const mongoose = require("mongoose");
const dotenv = require('dotenv');
// import * as dotenv from 'dotenv'

require("dotenv").config()

const MONGODB_URI =
  process.env.PROD_MONGODB ||
  process.env.MONGODB_URI
  ||"mongodb+srv://bideherman:codelive22@chat-app.kp3ynbr.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI,{ useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log("Successfully connected to mongoDB."))
  .catch((e) => console.error("MongoDB Connection Error: ", e.message));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
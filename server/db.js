// const mongoose = require("mongoose");

// const MONGODB_URI =
//   process.env.PROD_MONGODB ||
//   process.env.MONGODB_URI ||
//   "mongodb://127.0.0.1:27017/goalPlannerDatabase";

// mongoose
//   .connect(MONGODB_URI)
//   .then(() => console.log("Successfully connected to mongoDB."))
//   .catch((e) => console.error("MongoDB Connection Error: ", e.message));

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// module.exports = db;
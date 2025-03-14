const mongoose = require("mongoose");
const { MONGO_URI } = require("../env");
var connectMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.info("Connected to MongoDB...");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
};

module.exports = connectMongo;

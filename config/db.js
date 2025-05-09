const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error; // Ensure error is caught and logged
  }
};

module.exports = connectDB;

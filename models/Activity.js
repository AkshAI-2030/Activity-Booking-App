const mongoose = require("mongoose");
const activitySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    location: String,
    datetime: Date,
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Activity", activitySchema);

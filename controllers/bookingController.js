const Booking = require("../models/Booking");
const Activity = require("../models/Activity");
const mongoose = require("mongoose");

exports.bookActivity = async (req, res) => {
  const { activityId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(activityId)) {
    return res.status(400).json({ message: "Invalid activity ID format" });
  }
  try {
    const activity = await Activity.findById(activityId);
    if (!activity)
      return res.status(404).json({ message: "Activity not found" });
    const booking = await Booking.create({
      user: req.user.id,
      activity: activityId,
    });
    res.status(201).json({ message: "Activity booked", booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("activity")
      .select("-user");
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

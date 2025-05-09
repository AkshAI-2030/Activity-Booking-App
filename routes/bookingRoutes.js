const express = require("express");
const {
  bookActivity,
  getMyBookings,
} = require("../controllers/bookingController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/:activityId", authMiddleware, bookActivity);

router.get("/my", authMiddleware, getMyBookings);

module.exports = router;

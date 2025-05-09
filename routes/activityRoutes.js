const express = require("express");
const {
  getActivities,
  createActivity,
} = require("../controllers/activityController");
const { createActivityValidation } = require("../validators/validations");
const { validationResult } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validationMiddleware");
const router = express.Router();

router.get("/", getActivities);

router.post(
  "/",
  createActivityValidation,
  validate,
  authMiddleware,
  createActivity
);

module.exports = router;

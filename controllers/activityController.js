const Activity = require("../models/Activity");

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createActivity = async (req, res) => {
  const { title, description, location, datetime } = req.body;

  try {
    const activity = new Activity({
      title,
      description,
      location,
      datetime,
    });

    await activity.save();
    res
      .status(201)
      .json({ message: "Activity created successfully", activity });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

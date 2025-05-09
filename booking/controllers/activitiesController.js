import asyncHandler from "../middlewares/asyncMiddleware.js";
import Activity from "../models/Activity.js";

const getActivities = asyncHandler(async (req, res) => {
  const activities = await Activity.find({});

  if (activities.length === 0) {
    res.status(404).json({ message: "No activities found" });
  } else {
    res.status(200).json(activities);
  }
});

export { getActivities };

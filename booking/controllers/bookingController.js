import asyncHandler from "../middlewares/asyncMiddleware.js";
import Booking from "../models/Booking.js";
import Activity from "../models/Activity.js";

const bookActivity = asyncHandler(async (req, res) => {
  const { activityId } = req.body;

  // Check if activity exists
  const activity = await Activity.findById(activityId);
  if (!activity) {
    res.status(404);
    throw new Error("Activity not found");
  }

  // Create booking
  const booking = await Booking.create({
    user: req.user._id,
    activity: activityId,
  });

  res.status(201).json(booking);
});

// Get logged-in user's bookings
const getMyBooking = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate(
    "activity"
  );

  res.status(200).json(bookings);
});

export { bookActivity, getMyBooking };

import express from "express";

import {
  bookActivity,
  getMyBooking,
} from "../controllers/bookingController.js";

import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/book", protect, bookActivity);
router.get("/myBooking", protect, getMyBooking);

export default router;

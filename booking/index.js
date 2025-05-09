import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import activitiesRoute from "./routes/activitiesRoute.js";
import bookingRoute from "./routes/bookingRoute.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ type: "true" }));

app.get("/", (req, res) => {
  res.send("api running");
});

app.use("/api/users", userRoute);
app.use("/api/activities", activitiesRoute);
app.use("/api/bookings", bookingRoute);

app.listen(port, () => {
  console.log(`server is up ${port}`);
});

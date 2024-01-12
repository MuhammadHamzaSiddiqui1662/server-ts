import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import TestRouter from "./features/test/test.controller";
import UserRouter from "./features/user/user.controller";
import CookiesRouter from "./features/cookies/cookies.controller";

const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  console.log(`Server is running on port ${PORT}`);
  res.status(200).send("Server is live!");
});

app.use("/test", TestRouter);
app.use("/user", UserRouter);
app.use("/cookies", CookiesRouter);

// Connect to DB
// uncomment below line after adding MONGODB_URI or DB_CONNECTION string
// mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECTION!);

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

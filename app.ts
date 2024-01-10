import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import TestRouter from "./features/test/test.controller";
import UserRouter from "./features/user/user.controller";

const app = express();
dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  console.log(`Server is running on port ${PORT}`);
  res.status(200).send("Server is live!");
});

app.use("/test", TestRouter);
app.use("/user", UserRouter);

// Connect to DB
// uncomment below line after adding MONGODB_URI or DB_CONNECTION string
// mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECTION!);

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

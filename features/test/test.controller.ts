import express from "express";
import { getAll } from "./test.service";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tests = await getAll();
    res.status(200).json({ tests });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

export default router;

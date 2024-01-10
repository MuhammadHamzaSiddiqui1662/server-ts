import express from "express";
import {
  createUser,
  getAllUsers,
  getUserWithEmail,
  getUserWithEmailAndPassword,
} from "./user.service";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if (!req.query.email) {
      const users = await getAllUsers();
      res.status(200).json(users);
    } else if (req.query.email && !req.query.password) {
      const user = await getUserWithEmail(req.query.email as string);
      res.status(200).json(user);
    } else {
      const users = await getUserWithEmailAndPassword(
        req.query.email as string,
        req.query.password as string
      );
      res.status(200).json(users);
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await createUser({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

export default router;

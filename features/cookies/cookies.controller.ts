import express from "express";

const router = express.Router();

router.get("/read", async (req, res) => {
  try {
    // Native method
    // res.setHeader("Set-Cookie", "newUser=true")

    // using cookie-parser third party middleware
    res.cookie("newUser", false);
    res.cookie("isEmployee", true, {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      // secure: true
    });

    res.send("you got the cookies!");
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.get("/set", async (req, res) => {
  try {
    const cookies = req.cookies;
    console.log(cookies);

    res.json(cookies);
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

export default router;

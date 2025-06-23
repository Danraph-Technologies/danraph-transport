const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

router.post("/", async (req, res) => {
  const { identifier, password } = req.body;
  if (!identifier || !password) {
    return res
      .status(400)
      .json({ message: "Identifier and password are required" });
  }
  try {
    // Accept either username or email for login
    const user = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });
    if (!user) {
      // Explicit error for wrong email/username
      return res.status(401).json({ message: "Email or username not found" });
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Explicit error for wrong password
      return res.status(401).json({ message: "Incorrect password" });
    }
    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    // Set JWT as HttpOnly cookie for localhost only
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      // domain: undefined, // do not set domain for localhost
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userType: user.userType,
        phone: user.phone,
      },
      userType: user.userType, // Explicitly include userType for frontend redirect
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
module.exports = router;

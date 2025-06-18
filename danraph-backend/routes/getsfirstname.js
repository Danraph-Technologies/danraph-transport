const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

// Middleware to verify JWT from HttpOnly cookie
function authenticateToken(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "No token provided" });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

router.get("/", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("firstName");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ firstName: user.firstName });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;

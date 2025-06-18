const express = require("express");
const User = require("../models/User");
const authenticateToken = require("../middleware/authenticateToken");
const router = express.Router();

router.get("/", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select(
      "firstName lastName email username phone profileImage"
    );
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;

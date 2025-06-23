const express = require("express");
const authenticateToken = require("../middleware/authenticateToken");
const router = express.Router();

router.get("/", authenticateToken, (req, res) => {
  res.json({ message: "Token valid", user: req.user });
});

module.exports = router;

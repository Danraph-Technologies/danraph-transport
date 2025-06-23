const express = require("express");
const multer = require("multer");
const path = require("path");
const User = require("../models/User");
const authenticateToken = require("../middleware/authenticateToken");
const router = express.Router();

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, req.user.id + "_profile" + ext);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
});

// Update user settings (profile image, firstName, lastName, email, username, phone)
router.post(
  "/",
  authenticateToken,
  upload.single("profileImage"),
  async (req, res) => {
    try {
      const { firstName, lastName, email, username, phone } = req.body;
      const userId = req.user.id;

      // Check for duplicate email (exclude current user)
      if (email) {
        const existingEmail = await User.findOne({
          email,
          _id: { $ne: userId },
        });
        if (existingEmail) {
          return res.status(409).json({ message: "Email already exists" });
        }
      }
      // Check for duplicate username (exclude current user)
      if (username) {
        const existingUsername = await User.findOne({
          username,
          _id: { $ne: userId },
        });
        if (existingUsername) {
          return res.status(409).json({ message: "Username already exists" });
        }
      }
      // Check for duplicate phone (exclude current user)
      if (phone) {
        const existingPhone = await User.findOne({
          phone,
          _id: { $ne: userId },
        });
        if (existingPhone) {
          return res
            .status(409)
            .json({ message: "Phone number already registered" });
        }
      }

      const updateFields = { firstName, lastName, email, username, phone };
      if (req.file) {
        updateFields.profileImage = `/uploads/${req.file.filename}`;
      }
      const user = await User.findByIdAndUpdate(userId, updateFields, {
        new: true,
      });
      if (!user) return res.status(404).json({ message: "User not found" });
      res.json({ message: "Settings updated successfully", user });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

module.exports = router;

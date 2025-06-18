const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();
require("dotenv").config({
  path: require("path").resolve(__dirname, "../.env"),
});

// Connect to MongoDB using URI from .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("✅ Successfully connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

router.post(
  "/",
  [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("userType")
      .isIn(["driver", "rider"])
      .withMessage("User type must be driver or rider"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("phone").notEmpty().withMessage("Phone number is required"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
    body("agreeToTerms")
      .equals("true")
      .withMessage("You must agree to the terms"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { firstName, lastName, userType, email, phone, password } = req.body;

    try {
      // Check for existing email
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "Email already exists" });
      }
      // Check for existing phone
      const existingPhone = await User.findOne({ phone });
      if (existingPhone) {
        return res
          .status(409)
          .json({ message: "Phone number already registered" });
      }
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create and save user
      const newUser = new User({
        firstName,
        lastName,
        userType,
        email,
        phone,
        password: hashedPassword,
        agreeToTerms: true,
      });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully." });
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

module.exports = router;

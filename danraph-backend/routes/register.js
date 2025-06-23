const express = require("express");
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
const router = express.Router();

// ✅ Avoid connecting to MongoDB here — already done in main server file!

router.post(
  "/",
  [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("username").notEmpty().withMessage("Username is required"),
    body("userType")
      .isIn(["driver", "rider"])
      .withMessage("User type must be driver or rider"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("phone").notEmpty().withMessage("Phone number is required"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
    body("agreeToTerms")
      .custom((value) => value === true || value === "true")
      .withMessage("You must agree to the terms"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }

    const { firstName, lastName, username, userType, email, phone, password } =
      req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "Email already exists" });
      }

      const existingPhone = await User.findOne({ phone });
      if (existingPhone) {
        return res
          .status(409)
          .json({ message: "Phone number already registered" });
      }

      const existingUsername = await User.findOne({ username });
      if (existingUsername) {
        return res.status(409).json({ message: "Username already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        firstName,
        lastName,
        username,
        userType,
        email,
        phone,
        password: hashedPassword,
        agreeToTerms: true,
      });

      await newUser.save();

      res.status(201).json({ message: "User registered successfully." });
    } catch (err) {
      console.error("❌ Registration error:", err.message);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

module.exports = router;

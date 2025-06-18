const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userType: { type: String, enum: ["driver", "rider"], required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  agreeToTerms: { type: Boolean, required: true },
  profileImage: { type: String, default: "" },
});

module.exports = mongoose.model("User", userSchema);

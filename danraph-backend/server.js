const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const getsFirstNameRoute = require("./routes/getsfirstname");
const meRoute = require("./routes/userscurrentinformation");
const changeSettingsRoute = require("./routes/changesettings");
const path = require("path");

app.use(
  cors({
    origin: ["https://danraph-transport.vercel.app", "https://danraph-services-drivers.vercel.app/drivers"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Use the register and login routes
app.use("/api/auth/register", registerRoute);
app.use("/api/auth/login", loginRoute);
app.use("/api/auth/getsfirstname", getsFirstNameRoute);
app.use("/api/auth/userscurrentinformation", meRoute);
app.use("/api/auth/changesettings", changeSettingsRoute);

// Serve uploaded images statically
app.use("/uploads", express.static(require("path").join(__dirname, "uploads")));
app.use(
  "/assets",
  express.static(path.join(__dirname, "../danraph-services/src/assets"))
);
app.use(
  "/public",
  express.static(path.join(__dirname, "../danraph-services/public"))
);

app.get("/", (req, res) => {
  res.send("✅ Danraph Backend is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});



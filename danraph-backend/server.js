const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

connectDB();

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", cors());

app.use(express.json());
app.use(cookieParser());

// Routers
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const getsFirstNameRoute = require("./routes/getusername");
const meRoute = require("./routes/userscurrentinformation");
const changeSettingsRoute = require("./routes/changesettings");
const logoutRoute = require("./routes/logout");
const verifyTokenRoute = require("./routes/verifytoken");

const apiRouter = express.Router();

apiRouter.use("/auth/register", registerRoute);
apiRouter.use("/auth/login", loginRoute);
apiRouter.use("/auth/getusername", getsFirstNameRoute);
apiRouter.use("/auth/userscurrentinformation", meRoute);
apiRouter.use("/auth/changesettings", changeSettingsRoute);
apiRouter.use("/auth/logout", logoutRoute);
apiRouter.use("/auth/verifytoken", verifyTokenRoute);

// Use /api as the base path for all API routes
app.use("/api", apiRouter);

// Serve static uploads at /uploads (no more /danraph-backend prefix)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Simple health check route
app.get("/", (req, res) => {
  res.send("✅ Danraph Backend is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  
});

// In your login route, update the cookie settings:
// res.cookie("token", token, {
//   httpOnly: true,
//   secure: false,
//   sameSite: "lax",
//   domain: "localhost", // <-- add this line for local dev cross-port cookies
//   path: "/",
//   maxAge: 7 * 24 * 60 * 60 * 1000,
// });

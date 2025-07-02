require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

//MIDDLEWARE TO HANDLE CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", //either allow frontend or everyone
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//CONNECT DATABASE
connectDB();
//MIDDLEWARE
app.use(express.json());

//ROUTES
// app.use("/api/users", userRoutes);
// app.use("/api/report", reportRoutes);
// app.use("/api/task", taskRoutes);
// app.use("/api/auth", authRoutes);
// //START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});

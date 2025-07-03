const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect routes (only logged-in users can access)
const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (token && token.startsWith("Bearer")) {
      token = token.split(" ")[1]; // Extract token from "Bearer <token>"
      const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
      req.user = await User.findById(decoded.id).select("-password"); // Attach user to request, exclude password
      next(); // Pass to next middleware or route
    } else {
      res.status(401).json({ message: "Not authorized, no token" });
    }
  } catch (error) {
    res.status(401).json({ message: "Token failed", error: error.message });
  }
};


//Middleware for Admin-only access
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next(); // Allow admin
  } else {
    res.status(403).json({ message: "Access denied, admin only" });
  }
};

// Export both middlewares
module.exports = { protect, adminOnly };

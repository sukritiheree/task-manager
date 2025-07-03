const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//generating token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc register new user
// @route POST/api/auth/register
// @access public
const registerUser = async (req, res) => {
  try {
    const { name, email, password, profileImageURL, adminIniviteToken } =
      req.body;
    //check if user already exists  
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "user already exists" });
    }
    // Determine user role: Admin if correct token is provided, otherwise Member
    let role = "member";
    if (
      adminInviteToken &&
      adminInviteToken === process.env.ADMIN_INVITE_TOKEN
    ) {
      role = "admin";
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profileImageURL,
      role,
    });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      profileImageURL: user.profileImageURL,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};
// @desc login user
// @route POST/api/auth/login
// @access public
const loginUser = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};
// @desc get user profile
// @route GET/api/auth/profile
// @access private
const getUserProfile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};
// @desc upate user profile
// @route GET/api/auth/profile
// @access private
const updateUserProfile = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "server error", error: error.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile, updateUserProfile };

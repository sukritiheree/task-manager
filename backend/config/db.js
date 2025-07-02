const mongoose = require("mongoose");
const connectDB = async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected");
  } catch (err) {
    console.error("error connecting to MongoDB", err);
    process.exit(1);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};
module.exports = connectDB;
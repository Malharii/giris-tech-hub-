import dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/studentdb";
const connectDb = async () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Failed to connect to MongoDB:", err.message);
      process.exit(1);
    });
};

export default connectDb;

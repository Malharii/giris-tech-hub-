import mongoose from "mongoose";
import { MONGODB_URI } from "./serverConfig.js";

import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongoDB connected SucessFully ");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/dbConfig.js";
import { PORT } from "./config/serverConfig.js";

import morgan from "morgan";

import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));

connectDB();

app.use("/api/books", bookRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

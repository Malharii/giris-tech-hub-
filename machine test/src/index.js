import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import studentsRouter from "./routes/studentsRoute.js";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Student Management API is running" }));

app.use("/api/students", studentsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;

connectDb();
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

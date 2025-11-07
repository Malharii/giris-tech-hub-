import express from "express";
import {
  createStudent,
  getStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/post", createStudent);
router.get("/get", getStudents);
router.get("/get/:id", getStudent);
router.put("/put/:id", updateStudent);
router.delete("/delete/:id", deleteStudent);

export default router;

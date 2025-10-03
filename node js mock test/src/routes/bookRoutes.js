import express from "express";
import {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} from "../controller/bookController.js";

const router = express.Router();

router.post("/create-books", createBook);
router.get("/get-all-books", getAllBooks);
router.get("/get-single-book/:id", getSingleBook);
router.put("/update-book/:id", updateBook);
router.delete("/book-delete/:id", deleteBook);

export default router;

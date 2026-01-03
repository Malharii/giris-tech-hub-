const express = require("express");
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/books/create", createBook);
router.get("/books/getall", getAllBooks);
router.get("/books/get/:id", getBookById);
router.patch("/books/update/:id", updateBook);
router.delete("/books/delete/:id", deleteBook);

module.exports = router;

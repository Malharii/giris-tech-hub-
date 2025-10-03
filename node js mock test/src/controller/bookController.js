import Book from "../model/Book.js";

export const createBook = async (req, res) => {
  try {
    const { title, author, description, coverImage } = req.body || {};

    if (!title || !author) {
      return res.status(400).json({
        success: false,
        message: "Title and Author are required",
      });
    }

    const newBook = await Book.create({ title, author, description, coverImage });

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json({ success: true, message: "Books fetched successfully", data: books });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getSingleBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ success: false, message: "Book not found" });
    res.json({ success: true, message: "Book fetched successfully", data: book });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid ID" });
  }
};

export const updateBook = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body); // should now log your JSON

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedBook)
      return res.status(404).json({ success: false, message: "Book not found" });

    console.log("UPDATED BOOK:", updatedBook);

    res.json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);
    res.status(400).json({ success: false, message: "Invalid ID or data" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook)
      return res.status(404).json({ success: false, message: "Book not found" });
    res.json({ success: true, message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid ID" });
  }
};

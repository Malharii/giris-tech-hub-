const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      trim: true,
    },
    bookDesc: {
      type: String,
      required: true,
    },
    bookPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    bookAuthor: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);

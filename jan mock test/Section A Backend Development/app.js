const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", bookRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
});

module.exports = app;

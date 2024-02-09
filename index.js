const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

// Route for /api that serves JSON from a file
app.get("/api", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error reading data file" });
    }
    res.json(JSON.parse(data));
  });
});

// Root route to prevent "Cannot GET /" error
app.get("/", (req, res) => {
  res.send("Welcome to ShifterDrive API. Use /api to access the data.");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

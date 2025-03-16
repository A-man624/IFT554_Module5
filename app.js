// Student Name: Alexander Martinez
// Student ID: 1214728190
// Date: 03/15/25

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // Added "Change1"
  res.send("Alexander Martinez IFT554 Module5 Change1");
});

// Start the server
app.listen(3000, () => {
  console.log("The server is running on port 3000");
});
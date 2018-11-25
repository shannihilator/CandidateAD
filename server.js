//IMOPORT DOTENV FOR HIDDEN KEYS
require("dotenv").config();

//IMPORT EXPRESS
const express = require("express");
const app = express();

//TEST
app.get("/", (req, res) => {
  res.send("Homepage Works!");
});

//=====================================================
app.listen(3500, () => {
  console.log("Your server is running on: 3500!");
});

//IMOPORT DOTENV FOR HIDDEN KEYS
require("dotenv").config();

//IMPORT EXPRESS
const express = require("express");
const app = express();

//IMPORT AXIOS
const axios = require("axios");

// ******************
//  ROUTES
// ******************
// ========================================================
//  GET ALL USERS
// ========================================================

app.get("/", (req, res) => {
  axios
    .get("https://api.salesloft.com/v2/people.json", {
      headers: {
        contentType: "application/json",
        Authorization: `Bearer` + ` ` + `${process.env.API_KEY}`
      }
    })
    .then(response => {
      //   console.log(response.data);
      res.send(response.data);
    })
    .catch(err => {
      console.log(err);
    });
});

// ******************
// SERVER SETUP
// ******************
app.listen(3500, () => {
  console.log("Your server is running on: 3500!");
});

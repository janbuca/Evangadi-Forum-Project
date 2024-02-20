const express = require("express");
const questionRouter = express.Router();

// Register route
questionRouter.post("/register", (req, res) => {
  res.send("Registering new user");
});

//Login user
questionRouter.post("/login", (req, res) => {
  res.send("Login  new user");
});

//Check user
questionRouter.get("/check", (req, res) => {
  res.send("Check new user");
});

module.exports = questionRouter;

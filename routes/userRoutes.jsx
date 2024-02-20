const express = require("express");
const userRouter = express.Router();

// Register route
userRouter.post("/register", (req, res) => {
    res.send("Registering new user");
});

//Login user 
userRouter.post("/login", (req, res) => {    
    res.send("Registering new user");
});

//Check user
userRouter.get("/check", (req, res) => {    
    res.send("Check new user");
});

module.exports = userRouter;
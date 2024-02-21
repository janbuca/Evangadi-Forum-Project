const express = require("express");
const userRouter = express.Router();

// authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

// user cont// user controller
const {  register, login, checkUser, } = require("../controllers/userController");
// Register route
userRouter.post("/register", register);

//Login user
userRouter.post("/login", login)

//Check user
userRouter.get("/check",authMiddleware, checkUser);

module.exports = userRouter;

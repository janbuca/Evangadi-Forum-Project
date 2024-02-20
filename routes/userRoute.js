const express = require("express");
const userRouter = express.Router();
// user cont// user controller
const {  register, login, checkUser, } = require("../controllers/userController");
// Register route
userRouter.post("/register", register);

//Login user
userRouter.post("/login", login)

//Check user
userRouter.get("/check",  checkUser);

module.exports = userRouter;

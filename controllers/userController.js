const dbconnection = require("../db/dbConfig");
const bcrypt = require("bcrypt");
const { StatusCodes } = require("http-status-codes");

async function register(req, res) {
  const { username, email, firstname, lastname, password } = req.body;
  if (!username || !email || !firstname || !lastname || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please enter all fields" });
  }
  try {
    const [user] = await dbconnection.query(
      "SELECT username, userid FROM users WHERE username = ? OR email = ?",
      [username, email]
    );
    if (user.length > 0) {
      return res.status(400).json({ msg: "User already exists" });
    }
    if (password.length < 8) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Password must be at least 8 characters" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await dbconnection.query(
      "INSERT INTO users (username, email, firstname, lastname, password) VALUES(?, ?, ?, ?,?)",
      [username, email, firstname, lastname, hashedPassword]
    );
    res.status(StatusCodes.CREATED).json({ msg: "User register" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json("something went wrong, try again later!");
  }
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please enter all fields" });
  }
  try {
    const [user] = await dbconnection.query(
      "SELECT username,userid,password FROM users WHERE email=?",
      [email]
    );
    
    if(user.length==0){
      return res.status(StatusCodes.BAD_REQUEST).json({
          msg:"invalid credential"
      });
  }
  // compare password 
  const isMatch = await bcrypt.compare(password,user[0].password)
  if(!isMatch){
      return res.status(StatusCodes.BAD_REQUEST).json({msg:"invalid credential"})
  }
  return res.json({user})
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something went wrong, try again later!" });
  }
}

async function checkUser(req, res) {
  res.send("Check new user");
}

module.exports = {
  register,
  login,
  checkUser,
};

const mysql2 = require('mysql2');
require("dotenv").config();
const dbconnection = mysql2.createPool({
  user: process.env.USER,
  host: "localhost",
  password: process.env.PASSWORD,
  database:process.env.DATABASE,
  connectionLimit:10,
});


module.exports = dbconnection.promise();


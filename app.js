// require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 5500;

// const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

// db connection
const dbconnection = require("./db/dbConfig");


app.use(cors());

// parse requests of content-type - application/json



// use routes middleware file
//const userRoutes = require("./routes/userRoute");
const userRoutes = require("./routes/userRoute");

// questions routes middleware file
const questionsRoutes = require("./routes/questionRoute");

// authentication middleware file
const authMiddleware = require("./middleware/authMiddleware");

// answer route middleware 
const answerRoutes = require("./routes/answerRoute")

// Apply helmet middleware
app.use(helmet());

// json middleware to extract json data
app.use(express.json());


// questions routes middleware??
app.use("/api/questions",authMiddleware, questionsRoutes);

// answers routes middleware??
app.use("/api/answer",authMiddleware, answerRoutes);


async function start() {
  try {
    const result = await dbconnection.execute("select 'test'");

    await app.listen(port);
    console.log("database connection established");
    console.log(`listing on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}

start();

app.use("/api/users", userRoutes);

//  app.listen(port, (err)=> {
//     if (err) {
//         console.log(err.message);
//     }else{
//         console.log( `Server is running on ${port}` );
//     }
//  })

// //const userRouter = require('./routes/userRoutes');

// // User route middleware file

// app.use("api/users", userRouter);

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });

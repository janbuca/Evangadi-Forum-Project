 const express = require('express');
 const app = express();
const port = 5500;

// use routes middleware file
//const userRoutes = require("./routes/userRoute");
const userRoutes = require("./routes/userRoute")

// questions routes middleware file
// answer route middleware file 


app.use("/api/users", userRoutes)



 app.listen(port, (err)=> {
    if (err) {
        console.log(err.message);
    }else{
        console.log( `Server is running on ${port}` );
    }
 }) 





   
// //const userRouter = require('./routes/userRoutes');



// // User route middleware file



// app.use("api/users", userRouter);


// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });

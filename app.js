 const express = require('express');
// const userRouter = require('./routes/userRoutes');
 const app = express();
const port = 5500

 app.listen(port, (err)=> {
    if (err) {
        console.log(err.message);
    }else{
        console.log( `Server is running on ${port}` );
    }
 })
   
// //const userRouter = require('./routes/userRoutes');

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

// // User route middleware file



// app.use("api/users", userRouter);


// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });

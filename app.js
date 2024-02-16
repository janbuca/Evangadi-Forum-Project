const express = require('express');
const app = express();
const port = 5500;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Register route
app.post("/api/users/register", (req, res) => {
    // Code to register a user goes here...
    res.send("Registering new user");
});

//Login user 
app.post("/api/users/login", (req, res) => {
    // Code to register a user goes here...
    res.send("Registering new user");
});

//Check user
app.get("/api/users/check", (req, res) => {
    // Code to register a user goes here...
    res.send("Check new user");
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


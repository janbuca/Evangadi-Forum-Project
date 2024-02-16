const express = require("express");
const cors = require("cors");
const port = 5500;

const app = express();

app.listen(port, (err) => {
	if (err) {
		console.log(err.message);
	} else {
		console.log(`listen on ${port}`);
	}
 });
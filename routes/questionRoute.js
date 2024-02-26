const express = require("express");
const router = express.Router();
const {
	askQuestion,
	getQuestion,
	getSingleQuestion,
} = require("../controller/questionController");
router.get("/all-questions", getQuestion);

router.post("/ask-question", askQuestion);
// get single question
router.get("/question", getSingleQuestion);
module.exports = router;

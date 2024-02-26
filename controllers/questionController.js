// ask question functionality
const crypto = require("crypto");
const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");
const dbconnection = require("../db/dbConfig");
const askQuestion = async (req, res) => {
	const { title, description, tag } = req.body;
	const userid = req.user.userid;
	const generateQuestionId = () => {
		const randomBytes = crypto.randomBytes(16);
		const uuid = uuidv4({ random: randomBytes });
		return uuid;
	};
	const questionid = generateQuestionId();
	const askQuery = `INSERT INTO questions (questionid,userid,title,description,tag) VALUES (?,?,?,?,?)`;
	try {
		await dbconnection.query(askQuery, [
			questionid,
			userid,
			title,
			description,
			tag,
		]);
		return res.status(StatusCodes.CREATED).json({ msg: "Question asked!" });
	} catch (error) {
		console.log(error.message);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: "something went wrong, try again later!" });
	}
};
//get quetion functionalty
const getQuestion= async(req,res)=>{
try {
	const fechquestion = `SELECT questions.title,questions.questionid,users.username FROM questions LEFT JOIN users ON questions.userid = users.userid order by id desc `;
	const [response] = await dbconnection.query( fechquestion) 
	
	return res.status(StatusCodes.OK).json({ response });
} catch (error) {
	console.log(error.message);
	return res
		.status(StatusCodes.INTERNAL_SERVER_ERROR)
		.json({ msg: "something went wrong, try again later!" });
}
}

// fetch a single question
async function getSingleQuestion(req, res) {
	// res.json({ msg: "all questions" });
	try {
		const {questionid}=req.query
		const fetchSingleQuestion = `SELECT questions.*,users.username FROM questions left join users ON questions.userid=users.userid where questionid=? order by id desc `;
		const questions = await dbconnection.query(fetchSingleQuestion, [
			questionid,
		]);
		return res.status(StatusCodes.OK).json({ questions: questions[0] });
	} catch (error) {
		console.log(error.message);
		return res
			.status(500)
			.json({ msg: "something went wrong, try again later!" });
	}
}

module.exports = { askQuestion, getQuestion, getSingleQuestion };

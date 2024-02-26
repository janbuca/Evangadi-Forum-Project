// post answer functionality

const { StatusCodes } = require("http-status-codes");
const dbconnection = require("../db/dbConfig");

async function postanswer(req, res) {
	const { questionid, answer } = req.body;
	const userid = req.user.userid;

	const answerQuery = `INSERT INTO answers(userid,questionid,answer) VALUES (?,?,?)`;

	try {
		await dbconnection.query(answerQuery, [userid, questionid, answer]);

		return res.status(StatusCodes.CREATED).json({ msg: "post answer!" });
	} catch (error) {
		console.log(error.message);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: "something went wrong, try again later!" });
	}
}

async function getanswer(req, res) {
	const questionid = req.query.questionid;

	try {
		const readAllAnswers = `SELECT answers.*,users.username FROM answers LEFT JOIN users ON answers.userid = users.userid where answers.questionid=? `;

		const [response] = await dbconnection.query(readAllAnswers, [questionid]);

		return res.status(StatusCodes.OK).json({ response });
	} catch (error) {
		console.log(error.message);
		return res
			.status(StatusCodes.INTERNAL_SERVER_ERROR)
			.json({ msg: "something went wrong, try again later!" });
	}
}

module.exports = { postanswer, getanswer };

const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer")) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.json({ msg: "Authentication invalid" });
	}

	const token = authHeader.split(" ")[1];
	try {
		const { username, userid } = jwt.verify(token, "secret");
		// create custom user property
		req.user = { username, userid };
		next();
		// return res.status(StatusCodes.OK).json({ data });
	} catch (error) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.json({ msg: "Authentication invalid" });
	}
}

module.exports = authMiddleware;

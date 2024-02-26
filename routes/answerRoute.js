const express = require('express')
const router =express.Router()
const {postanswer, getanswer} = require("../controllers/answerController")




router.post("/answer",postanswer)

router.get("/getanswer",getanswer)




module.exports = router
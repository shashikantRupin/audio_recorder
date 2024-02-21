const express = require('express')
const router = express.Router()
const {getAudio, postAudio} = require('../controllers/audioController')


router.route('/').get(getAudio).post(postAudio)


module.exports = router

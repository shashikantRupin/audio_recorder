
const Audio = require('../models/audioModel')


const getAudio = async(req, res) => {
    const getAudio = await Audio.find()
    res.status(200).json(getAudio)
}


const postAudio = async(req, res) => {
    const {audio} = req.body
    const postAudio = await Audio.create({
        audio,
    })
    res.status(200).json(postAudio)
}


module.exports = {getAudio, postAudio}

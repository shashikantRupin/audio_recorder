const mongoose = require('mongoose')


const AudioSchema = mongoose.Schema({
    audio:{
        type: 'String',
        // data: Buffer,
        // contentType: String,
        // required: [true, 'Please fill the field'],
    },
}, {timestamps: true})


module.exports = mongoose.model('Audio', AudioSchema)

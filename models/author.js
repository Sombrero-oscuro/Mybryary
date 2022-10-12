const mongoose = require('mongoose')

const authoerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Author', authoerSchema)
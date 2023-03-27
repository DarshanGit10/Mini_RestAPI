// DB schemas 

const mongoose = require('mongoose')

const stdSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tech: { type: String, required: true },
    marks: { type: Number, required: true },
    created: { type: Date, default: Date.now },
    
})

module.exports = mongoose.model('students', stdSchema)
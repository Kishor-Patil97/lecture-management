const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
    id: Number,
    studyprgm: String,
    block: Number,
    sem: Number,
    module: String,
    professors: Array,
    startdt: Date,
    enddt: Date,
    msg: String
})

module.exports = mongoose.model("PlanScheduleAdmin",lectureSchema);
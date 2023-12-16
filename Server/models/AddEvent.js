const mongoose = require('mongoose');

const eventschema = new mongoose.Schema({
    startdate: Date, 
    enddate: Date, 
    startime: String, 
    endtime: String, 
    eventype: String, 
    eventdetails: String
})

module.exports = mongoose.model("eventdetails",eventschema)
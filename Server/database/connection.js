const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:aLDQhMWr2AQ3bsBe@cluster0.yz76vjj.mongodb.net/', {
    dbName: 'lecture-management',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('connected', () => {
    console.log("Connected to MongoDB");
});

db.on('error', (err) => {
    console.error("MongoDB connection error");
});
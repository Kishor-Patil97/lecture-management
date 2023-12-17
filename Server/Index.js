const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

require('./database/connection')

const lectureplan = require('./models/Lecture');
const eventdetail = require('./models/AddEvent');

app.get('/', (req, res) => {
    res.send('Hello again');
});

// LecturePlans
app.post("/", async (req, res) => {
    try {
        const plan = await lectureplan.create(req.body);
        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.get("/getplan", async (req, res) => {
    try {
        let plan = await lectureplan.find({});
        res.status(200).json(plan);
    }
    catch {
        res.status(500).json({ message: error.message });
    }
});

//GetEvents
app.get("/getEvents", async (req, res) => {
    try {
        let plan = await eventdetail.find({});
        res.status(200).json(plan);
    }
    catch {
        res.status(500).json({ message: error.message });
    }
});

//AddEvents
app.post("/addEvents", async (req, res) => {
    try {
        const event = await eventdetail.create(req.body);
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.delete("/deleteEvent/:eventId", async (req, res) => {
    const eventId = req.params.eventId; 
    try {
        const deletedEvent = await eventdetail.findByIdAndDelete(eventId);
        if (!deletedEvent) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json({ message: "Event deleted successfully", deletedEvent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(4000);
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

require('./database/connection')

const lectureplan = require('./models/Lecture');

app.get('/', (req, res) => {
    res.send('Hello again');
  });

app.post("/", async (req, res) => {
    try {
        const plan = await lectureplan.create(req.body);
        res.status(200).json(plan);
    } catch (error) {
        res.status(500).json({message: error.message});
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

app.listen(4000);
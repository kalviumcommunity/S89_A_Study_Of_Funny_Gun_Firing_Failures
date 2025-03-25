<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/ping", (req, res) => {
    try {
        res.status(200).send({ msg: "pong" });
    } catch (error) {
        res.status(500).send({ msg: "Server error occurred", error: error.message });
    }
});


app.listen(3000, async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Server connected successfully")
    }catch(error){
        console.log("Error")
    }
    
=======
const express = require('express');

const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.listen(port, (err) => {
    if (err) {
        console.error('Error occurred while starting the server:', err);
        return;
    }
    console.log(`Server is running on http://localhost:${port}`);
>>>>>>> 6673e42839ef7eb2f392e1ff1b770710748a760c
});
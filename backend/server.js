// server.js
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors());
app.use(express.json());

app.get("/ping",(req,res)=>{
    res.send("pong")
})

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Use the routes
app.use('/api', routes);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

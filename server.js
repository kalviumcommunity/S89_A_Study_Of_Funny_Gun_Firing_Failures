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
});
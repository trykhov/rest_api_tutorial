const express = require('express');

const app = express();

// Have ability to create routes in simple way

// Routes
app.get('/', (req, res) => {
    res.send("We are on home");
})




// Listening to server
app.listen(3000);
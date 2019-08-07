const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
// Have ability to create routes in simple way

// Middlewares


// app.use('/posts', (req, res) => {
//     // every time posts is called / visited, this logic runs
//     console.log('This is a middleware running');
//     res.send("We're on posts");
// })

// Routes

// get, post, delete, patch are methods
// first method is route
app.get('/', (req, res) => { 
    res.send("We are on home"); 
});

app.get('/posts', (req, res) => {
    res.send("We're on posts");
});


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to DB!');
    
})

// Listening to server
app.listen(3000);
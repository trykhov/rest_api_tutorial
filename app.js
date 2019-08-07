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

// Import Routes
const postsRoute = require('./routes/posts'); // importing the route from the posts.js file in routes folder

app.use('/posts', postsRoute); // any route that comes after /posts is no longer needed to write /posts/route_name

// Routes

// get, post, delete, patch are methods
// first method is route
app.get('/', (req, res) => { 
    res.send("We are on home"); 
});

// no longer needed due to the postsRoutes
// app.get('/posts', (req, res) => {
//     res.send("We're on posts");
// });


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to DB!');
    
})

// Listening to server
app.listen(3000);
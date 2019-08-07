const express = require('express');

const router = express.Router();

// since we're using the postsRoute middleware, we don't need /posts anymore
router.get('/', (req, res) => {
    res.send("We're on posts");
});

router.get('/tests', (req, res) => {
    // when you enter the URL /posts/tests, the logic below will run
    res.send("Show that we're on /posts/tests");
})

module.exports = router;
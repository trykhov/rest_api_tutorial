const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

// since we're using the postsRoute middleware, we don't need /posts anymore
// router.get('/', (req, res) => {
//     res.send("We're on posts");
// });

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({message: err});
    }
})

router.get('/tests', (req, res) => {
    // when you enter the URL /posts/tests, the logic below will run
    res.send("Show that we're on /posts/tests");
});

// router.post('/',  (req, res) => {
//     const post = new Post({
//         title: req.body.title,
//         description: req.body.description
//     });
//     post.save() // sasves post to database
//         .then(data => {
//             res.json(data) //shows on screen
//         })
//         .catch(err => {
//             res.json({message: err})
//         })
// });

// cleaner version
router.post('/',  async (req, res) => {
    console.log("hi");
    const post = new Post({
        title: "hello",
        description: "hi"
    });
    try {
        const savedPost = await post.save(); // sasves post to database
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err})
    }
});

// Specific Post
router.get('/:postId', async (req,res) => { // anything after /posts/ is the post id
    // uses to find specific post
    // console.log(req.params.postId);
    try {
        const post = await Post.findById(req.params.postId); // findById is  query
        res.json(post);
    } catch (err) {
        res.json({ message })
    }
})

// Delete Post
router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId}); // remove is a query that removes post object from the database
        res.json({ removePost });
    } catch (err) {
        res.json({ message });
    }
})

// Update / patch a post 
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.patch(
            { _id: req.params.postId },
            { $set: { title: req.body.title }}
        );
        res.json({ updatePost });
    } catch (err) {
        res.json({ message });
    }
})

module.exports = router;
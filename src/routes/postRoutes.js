const express = require('express');
const PostController = require('../controllers/PostController');

const router = express.Router();

router.post('/posts', PostController.createPost);
router.get('/posts/:userID', PostController.getPostsByUserID); 
router.post('/posts/:id/like', PostController.likePost);

module.exports = router;
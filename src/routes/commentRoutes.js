const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

router.post('/comments', CommentController.createComment);

router.get('/posts/:postId/comments', CommentController.getCommentsByPostId);

module.exports = router;
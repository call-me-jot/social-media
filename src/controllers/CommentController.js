const CommentService = require('../services/CommentService');

class CommentController {
  static async createComment(req, res) {
    const { text, postId, userID } = req.body;
    const comment = await CommentService.createComment(text, postId, userID);
    res.status(201).json(comment);
  }

  static async getCommentsByPostId(req, res) {
    const { postId } = req.params;
    const comments = await CommentService.getCommentsByPostId(postId);
    res.status(200).json(comments);
  }
}

module.exports = CommentController;
const Comment = require('../models/Comment');
class CommentService {
  static async createComment(text, postId, userID) {
    try {
        const comment = new Comment({ text, postId, userID });
        return await comment.save();
    } catch (e) {
        console.log("This is the error", e);
    }
  
  }
  static async getCommentsByPostID(postId) {
    return await Comment.find({ postId }).populate('userID'); 
  }
}
module.exports = CommentService;
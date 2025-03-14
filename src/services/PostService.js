const Post = require('../models/Post');

class PostService {
  static async createPost(title, content, userID, likes, comments) {
    const post = new Post({ title, content, userID, likes, comments });
    return await post.save();
  }

  static async getPostsByUserID(userID) {
    return await Post.find({ userID }).populate('comments'); 
  }

  static async likePost(postId) {
    return await Post.findByIdAndUpdate(postId, { $inc: { likes: 1 } }, { new: true });
  }
}

module.exports = PostService;
const PostService = require('../services/PostService');

class PostController {
  static async createPost(req, res) {
    const { title, content, userID, likes, comments } = req.body;
    const post = await PostService.createPost(title, content, userID, likes, comments);
    res.status(201).json(post);
  }

  static async getPostsByUserID(req, res) {
    const { userID } = req.params;
    const posts = await PostService.getPostsByUserID(userID);
    res.status(200).json(posts);
  }

  static async likePost(req, res) {
    const { id } = req.params;
    const post = await PostService.likePost(id);
    res.status(200).json(post);
  }
}

module.exports = PostController;
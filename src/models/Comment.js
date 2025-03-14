const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  postId: { type:String, ref: 'Post' }, 
  userID: { type: String, ref: 'User' },
});

module.exports = mongoose.model('Comment', commentSchema);
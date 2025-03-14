const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
  comments: [{ type: String }], // Reference to the Comment model
  userID: { type: String, required: true }, // Reference to the User model
});

module.exports = mongoose.model('Post', postSchema);
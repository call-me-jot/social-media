const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect('mongodb+srv://group_4:final%40project@web-project.paf8p.mongodb.net/?retryWrites=true&w=majority&appName=web-project')
      .then(() => console.log('MongoDB connected'))
      .catch((err) => console.error('MongoDB connection error:', err));
  }
}

module.exports = new Database();
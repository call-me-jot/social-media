const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./utils/db');

// Import models to ensure they are registered with Mongoose
require('./models/Comment'); // Import the Comment model
require('./models/Post'); // Import the Post model
require('./models/User'); // Import the User model

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/api', postRoutes);
app.use('/api', commentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
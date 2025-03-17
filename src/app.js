// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const db = require('./utils/db');

// // Import models to ensure they are registered with Mongoose
// require('./models/Comment'); // Import the Comment model
// require('./models/Post'); // Import the Post model
// require('./models/User'); // Import the User model

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// // Routes
// const postRoutes = require('./routes/postRoutes');
// const commentRoutes = require('./routes/commentRoutes');
// const authRoutes = require('./routes/authRoutes');



// app.use('/api', postRoutes);
// app.use('/api', commentRoutes);
// app.use('/api',authRoutes);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './utils/db.js';

import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Use the imported routers
app.use('/api', postRoutes);
app.use('/api', commentRoutes);
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

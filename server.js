require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const corsMiddleware = require('./middlewares/corsMiddleware');
const path = require('path');
const routes = require('./routes/router');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

// Connect to MongoDB before starting the server
connectDB()
  .then(() => {
    console.log('✅ MongoDB Connected Successfully');

    // Apply Middleware
    app.use(corsMiddleware);
    app.use(bodyParser.json()); // To parse JSON bodies
    app.use(express.json());
    app.use('/api' ,routes);

    // Test Route
    app.get('/', (req, res) => {
      res.send('API is running...');
    });

    // Global Error Handling Middleware
    app.use((err, req, res, next) => {
      if (err.message === 'Not allowed by CORS') {
        return res.status(403).json({ message: 'CORS policy does not allow this request' });
      }
      console.error('🚨 Error:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    });

    // Start Server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB connection failed, shutting down...');
    console.error(err);
    process.exit(1);
  });

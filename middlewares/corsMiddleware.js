const cors = require('cors');

const allowedOrigins = [
    'http://localhost:4200', // Dev frontend
    'https://yourfrontenddomain.com' // Production frontend
  ];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  };
  
  module.exports = cors(corsOptions);
const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const authMiddleware = require('../middlewares/authMiddleware');

router.use('/auth',authMiddleware, authRoutes); 

module.exports = router;
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const {validateLoginRequest, validateSignupRequest } = require('../middlewares/validateMiddleware');
const { login, signup } = require('../controllers/authController');

router.post('/login', validateLoginRequest, login);
router.post('/signup',validateSignupRequest, signup);



module.exports = router;
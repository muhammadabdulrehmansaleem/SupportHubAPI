const authService = require('../services/authService');
const Response=require('../utils/response')

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log('email', email);
        console.log('password', password);
        const result = await authService.login(email, password);
        const response = Response.success(result, 'Login successful');
        res.status(response.statusCode).json(response);
    } catch (err) {
        const response = Response.error(err.message, null, 400);
        res.status(response.statusCode).json(response);
    }
}

const signup = async (req, res, next) => { 
    try {
        const { email, password } = req.body;
        const result = await authService.signup(email, password);
        const response = Response.success(result, 'Signup successful');
        res.status(response.statusCode).json(response);
    } catch (err) {
        const response = Response.error(err.message, null, 400);
        res.status(response.statusCode).json(response);
    }
}

module.exports = {
    login,
    signup
}

const Yup = require('yup');
const Response=require('../utils/response')
const validateLoginRequest = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email)
            {
                return res.status(400).json(new Response(400, 'Email is required',null));
        }
        if (!password)
            {
                return res.status(400).json(new Response(400, 'Password is required'));
        }
        const emailValid = Yup.string().email().isValidSync(email);
        if (!emailValid) {
            return res.status(400).json(new Response(400, 'Invalid email format'));
        }
        next();
        
    } catch (error)
    {
        return res.json(new Response.validationError(error.message));
    }
}
const validateSignupRequest = async (req, res, next) => { 
    try {
        if (!email)
            {
                return res.status(400).json(new Response(400, 'Email is required'));
        }
        if (!password)
            {
                return res.status(400).json(new Response(400, 'Password is required'));
        }
        const emailValid = Yup.string().email().isValidSync(email);
        if (!emailValid) {
            return res.status(400).json(new Response(400, 'Invalid email format'));
        }
        next();
        
    } catch (error)
    {
        return res.json(new Response.validationError(error.message));
    }
}

module.exports = {
    validateLoginRequest,
    validateSignupRequest
}
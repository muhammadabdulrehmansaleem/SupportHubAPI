const authMiddleware = (req, res, next) => {
    console.log('authMiddleware');
    next(); 
  };
  
  module.exports = authMiddleware;
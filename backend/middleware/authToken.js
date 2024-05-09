require('dotenv').config();

const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log('authHeader:', authHeader);
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token is missing or invalid' });
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, accessTokenSecret, (err, decodedToken) => {
    console.log('accessTokenSecret:', accessTokenSecret);
      console.log('authHeader:', authHeader);
      console.log('token:', token);
   
    if (err) {
      console.error('Error verifying token:', err);
      return res.status(401).json({ message: 'Invalid token' });
      
    }
    console.log('Decoded Token:', decodedToken);
   

    req.user = decodedToken;
    next();
  });
};

module.exports = {
  verifyToken,
};

const jwt = require('jsonwebtoken');
const secret = require('../secret');

const verifyAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secret);
    req.userData = decodedToken;
    next()
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid or expired token provided!',
      error
    })
  }
}

module.exports = verifyAuth;
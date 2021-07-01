const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const user = await User.where({ id: decodedToken.userId }).fetch();
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      message: 'Invalid or expired token provided!',
      error
    });
  }
};

module.exports = verifyAuth;

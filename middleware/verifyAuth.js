const jwt = require('jsonwebtoken');
const secret = require('../secret');
const models = require('../models')

const verifyAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, secret);
    req.user = await models.User.findByPk(decodedToken.userId);
    next()
  } catch (error) {
    return res.status(401).json({
      message: 'Invalid or expired token provided!',
      error
    })
  }
}

module.exports = verifyAuth;
const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require('../secret');

const signUp = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const findUser = await User.where({ email }).fetch({ require: false });
    if (findUser) {
      res.status(409).json({
        message: 'Email already exist!'
      });
    } else {
      const hashPassword = await bcryptjs.hashSync(password, 7);
      const createdUser = await User.forge({ email, password: hashPassword, name }).save();
      res.status(201).json({
        message: 'User created',
        data: createdUser
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      error
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.where({ email }).fetch({ require: false });
    if (user === null) {
      res.status(401).json({
        message: 'No such user!'
      });
    } else {
      bcryptjs.compare(password, user.attributes.password, (err, result) => {
        if (result) {
          jwt.sign(
            {
              email: user.attributes.email,
              userId: user.attributes.id,
              userName: user.attributes.name
            },
            secret,
            (err, token) => {
              res.status(200).json({
                message: 'Authentication successful!',
                data: {
                  token,
                  userName: user.attributes.name,
                  email: user.attributes.email,
                  id: user.attributes.id
                }
              });
            },
            { expiresIn: '24h' }
          );
        } else {
          res.status(400).json({
            message: 'Invalid credentials!'
          });
        }
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      error
    });
  }
};

module.exports = {
  signUp,
  login
};

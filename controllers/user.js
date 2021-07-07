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
      await User.forge({ email, password: hashPassword, name, user_img: '1.jpeg' }).save();
      res.status(201).json({
        message: 'User created'
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
      res.status(403).json({
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
                  id: user.attributes.id,
                  user_img: `${process.env.APP_URL}/images/${user.attributes.user_img}`
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

const getUser = async (req, res) => {
  try {
    const user = await req.user.fetch();
    const { id, name, user_img, email } = await user.attributes;
    res.status(201).json({
      data: {
        id,
        userName: name,
        user_img : `${process.env.APP_URL}/images/${user_img}`,
        email
      }
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      error
    });
  }
};

const updateUserImage = async (req, res) => {
  try {
    const user = await req.user.save({ user_img: req.nameImg }, { patch: true });
    res.status(201).json({
      message: 'Image updated'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong!',
      error
    });
  }
};

const updateUser = async (req, res) => {
  const { name } = req.body;
  try {
    await req.user.save({ name }, { patch: true });
    res.status(201).json({
      message: 'Name updated'
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong!',
      error
    });
  }
};

module.exports = {
  signUp,
  login,
  updateUserImage,
  updateUser,
  getUser
};

const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secret = require('../secret');

const signUp = (req, res) => {
  const { email, password, name } = req.body;
  models.User
    .findOne({ where: { email } })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: 'Email already exist!'
        });
      } else {
        const hashPassword = bcryptjs.hashSync(password, 7);
        models.User
          .create({ name, email, password: hashPassword })
          .then((result) => {
            res.status(201).json({
              message: 'User created successfully',
              res: result
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: 'Something went wrong!',
              err: error
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong!',
        err: error
      });
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  models.User
    .findOne({ where: { email } })
    .then((user) => {
      if (user === null) {
        res.status(401).json({
          message: 'No such user!'
        });
      } else {
        bcryptjs.compare(password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign(
              {
                email: user.email,
                userId: user.id,
                userName: user.name
              },
              secret,
              (err, token) => {
                res.status(200).json({
                  message: 'Authentication successful!',
                  massage: 'Authentication successful!',
                  token
                });
              },
              {expiresIn: "24h"}
            );
          } else {
            res.status(401).json({
              message: 'Invalid credentials!'
            });
          }
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong!',
        error
      });
    });
};

module.exports = {
  signUp,
  login
};

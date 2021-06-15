const Posts = require('../models/posts');

const showPosts = (req, res) => {
  Posts.findAll().then(result => {
    res.status(200).json(result);
  }).catch(error => {
      res.status(500).json({
        message: "Something went wrong!"
      });
  });
};

module.exports = showPosts;
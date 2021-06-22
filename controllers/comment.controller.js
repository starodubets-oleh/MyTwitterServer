const models = require('../models');

const createComment = (req, res) => {
  const { userId } = req.userData;
  const { postId } = req.params;
  const { comment } = req.body;

  const data = {
    postId: Number(postId), comment, userId
  }

  models.Comment
    .create(data)
    .then((result) => {
      res.status(201).json({
        message: 'Comment created successfully',
        content: result
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong!',
        error
      });
    });
};

module.exports = {
  createComment
}
const models = require('../models');

const showPosts = (req, res) => {
  const { authorId } = req.query;
  let params = {
    include: {
      model: models.User,
      attributes: [ 'name' ],
      required: true
    }
  };
  if (authorId) {
    params = {
      where: {
        userId: authorId
      },
      ...params
    };
  }
  models.Post
    .findAll(params)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: 'Something went wrong!',
        err: error
      });
    });
};

const showPost = (req, res) => {
  const { id } = req.params;
  models.Post
    .findByPk(id, {
      include: {
        model: models.User,
        attributes: [ 'name' ],
        required: false
      }
    })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({
          message: 'Post not found!'
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Something went wrong!'
      });
    });
};

const createPost = (req, res) => {
  const { userId } = req.userData;
  const { content } = req.body;
  models.Post
    .create({ content, userId })
    .then((result) => {
      res.status(201).json({
        massage: 'Post created successfully',
        content: result
      });
    })
    .catch((error) => {
      res.status(500).json({
        massage: 'Something went wrong',
        error
      });
    });
};

const updatePost = (req, res) => {
  const { userId } = req.userData;
  const { id } = req.params;
  const { updatedPost } = req.body;
  models.Post
    .update({ content: updatedPost }, { where: { id, userId } })
    .then((results) => {
      if (!!results[0]) {
        res.status(200).json({
          message: 'Post updated successfully',
          content: updatedPost
        });
      } else {
        res.status(404).json({
          message: 'Post not found!'
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        massage: 'Something went wrong',
        error
      });
    });
};

const deletePost = (req, res) => {
  const { userId } = req.userData;
  const { id } = req.params;
  models.Post
    .destroy({ where: { id, userId } })
    .then((result) => {
      if (result === 1) {
        res.status(200).json({
          message: 'Post deleted successfully'
        });
      } else {
        res.status(404).json({
          message: 'Post not found!'
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        massage: 'Something went wrong',
        error
      });
    });
};

module.exports = {
  showPosts,
  createPost,
  showPost,
  updatePost,
  deletePost
};

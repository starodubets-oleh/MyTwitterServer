const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/Post');

const createComment = async (req, res) => {
  const { content } = req.body;
  const { postId } = req.params;
  const { id } = req.user;
  try {

    const post = await Post.where({ id: Number(postId) }).fetch({ require: false });
    if (post === null) {
      res.status(404).json({
        massage: 'no entry'
      });
    } else {
      const comment = await Comment.forge({ content, user_id: id, post_id: Number(postId) }).save();
      res.status(201).json({
        message: 'created comment successful',
        data: comment
      });
    }
  } catch (error) {
    res.status(500).json({
      massage: 'Something went wrong!',
      error
    });
  }
};

const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { updatedComment } = req.body;
  const { id } = req.user;
  try {
    const comment = await Comment.where({ id: Number(commentId), user_id: id }).fetch({ require: false });
    if (comment === null) {
      res.status(404).json({
        massage: 'no entry'
      });
    } else {
      await comment.save({ content: updatedComment }, { patch: true });
      res.status(201).json({
        message: 'created Comment successful',
        data: comment
      });
    }
  } catch (error) {
    res.status(500).json({
      massage: 'Something went wrong',
      error
    });
  }
};

const deleteComment = async (req, res) => {
  const { commentId } = req.params;
  try {
    const comment = await Comment.where({ id: Number(commentId), user_id: req.user.id }).fetch({ require: false });
    if (comment === null) {
      res.status(404).json({
        massage: 'no entry'
      });
    } else {
      await comment.destroy();
      res.status(201).json({
        message: 'deleted Comment successful'
      });
    }
  } catch (error) {
    res.status(500).json({
      massage: 'Something went wrong',
      error
    });
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment
};

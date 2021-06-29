const Comment = require('../models/Comment');
const createComment = async (req, res) => {
  const { content } = req.body;
  const { postId } = req.params;
  const { id } = req.user.attributes;
  try {
    const post = await req.user.related('post').where({ id: Number(postId) }).fetch();
    if (post.length === 0) {
      res.status(404).json({
        massage: 'no entry'
      });
    } else {
      const comment = await req.user.related('comment').create({ content, post_id: Number(postId) });
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

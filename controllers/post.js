const Post = require('../models/Post');

const getPosts = async (req, res) => {

  try {
    const posts = await req.user.related('post').fetch({
      withRelated: [
        {
          user: (query) => query.select('id', 'name')
        }
      ]
    });
    res.status(200).json({
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      massage: 'Something went wrong',
      error
    });
  }
};

const getPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.where({ id: Number(postId) }).fetch({
      withRelated: [
        {
          user: (query) => query.select('id', 'name')
        }
      ]
    });
    res.status(200).json({
      data: post
    });
  } catch (error) {
    res.status(500).json({
      massage: 'Something went wrong',
      error
    });
  }
};

const createPost = async (req, res) => {
  const { content } = req.body;

  try {
    const post = await req.user.related('post').create({ content });

    res.status(201).json({
      message: 'created post successful',
      data: post
    });
  } catch (error) {
    res.status(500).json({
      massage: 'Something went wrong',
      error
    });
  }
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { updatedPost } = req.body;
  const { id } = req.user.attributes;
  try {
    const post = await Post.where({ id: Number(postId), user_id: id }).fetch({ require: false });
    if (post === null) {
      res.status(404).json({
        massage: 'no entry'
      });
    } else {
      await post.save({ content: updatedPost }, { patch: true });
      res.status(201).json({
        message: 'updated post successful',
        data: post
      });
    }
  } catch (error) {
    res.status(500).json({
      massage: 'Something went wrong',
      error
    });
  }
};

const deletePost = async (req, res) => {
  const { postId } = req.params;
  const { id } = req.user.attributes;
  try {
    const post = await Post.where({ id: Number(postId), user_id: id }).fetch({ require: false });
    if (post === null) {
      res.status(404).json({
        massage: 'no entry'
      });
    } else {
      await post.destroy();
      res.status(201).json({
        message: 'deleted post successful'
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
  getPosts,
  createPost,
  getPost,
  updatePost,
  deletePost
};

const Post = require('../models/Post');
const User = require('../models/User');

const getPosts = async (req, res) => {
  const { userId } = req.params;
  try {
    if (userId) {
        const authorPosts = await Post.where({ user_id: Number(userId) }).fetchAll({
          withRelated: [
            {
              user: (query) => query.select('id', 'name')
            },
            {
              'comments.user': (query) => query.select('id', 'name')
            }
          ]
        });
        res.status(200).json({
          data: authorPosts
        });
    } else {
      const posts = await Post.fetchAll({
        withRelated: [
          {
            user: (query) => query.select('id', 'name')
          },
          {
            'comments.user': (query) => query.select('id', 'name')
          }
        ]
      });
      res.status(200).json({
        data: posts
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.where({ id: Number(postId) }).fetch({
      withRelated: [
        {
          user: (query) => query.select('id', 'name')
        },
        {
          'comments.user': (query) => query.select('id', 'name')
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
  const { id } = req.user;
  try {
    const post = await Post.forge({ user_id: id, content }).save();
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
  const { id } = req.user;
  try {
    const post = await Post.where({ id: Number(postId), user_id: id }).fetch({ require: false });
    if (post === null) {
      res.status(404).json({
        massage: 'no entry'
      });
    } else {
      await post.save({ content: updatedPost }, { patch: true });
      res.status(201).json({
        message: 'created post successful',
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
  try {
    const post = await Post.where({ id: Number(postId), user_id: req.user.id }).fetch({ require: false });
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

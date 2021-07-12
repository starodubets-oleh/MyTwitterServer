const Post = require('../models/Post');
const User = require('../models/User');

const getUserPosts = async (req, res) => {
  const { userId } = req.params;
  const { point, size } = req.query
  try {
    const user = await User.where({ id: Number(userId) }).fetch({ require: false });
    if (user) {      
      const posts = await user.related('post')
      .orderBy('id', 'DESC') //Ascending ('ASC') or descending ('DESC') order
      .fetchCursorPage({
        limit: Number(size) || 10,
        after: [Number(point) || null],
        withRelated: [
          {
            user: (query) => query.select('id', 'name', 'user_img')
          }
        ]
      });
      res.status(200).json({
        data: posts,
        pagination: posts.pagination,
      });
    } else {
      res.status(404).json({
        message: 'no entry'
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something went wrong',
      error
    });
  }
};

const getUserPost = async (req, res) => {
  const { postId, userId } = req.params;
  try {
    const user = await User.where({ id: Number(userId) }).fetch({ require: false });
    if (user) {
      const post = await user.related('post').where({ id: Number(postId) }).fetch({
        withRelated: [
          {
            user: (query) => query.select('id', 'name', 'user_img')
          }
        ]
      });
      res.status(200).json({
        data: post
      });
    } else {
      res.status(404).json({
        message: 'no entry'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
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
      message: 'Something went wrong',
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
        message: 'no entry'
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
      message: 'Something went wrong',
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
        message: 'no entry'
      });
    } else {
      await post.destroy();
      res.status(201).json({
        message: 'deleted post successful'
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong',
      error
    });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getUserPosts,
  getUserPost
};

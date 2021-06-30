const express = require('express');
const router = express.Router();
const { getPosts, createPost, getPost, updatePost, deletePost } = require('../controllers/post');
const verifyAuth = require('../middleware/verifyAuth');
const validationMiddleware = require('../middleware/validationMiddleware');
const {
  getPostSchema,
  createPostSchema,
  updatePostSchema,
  deletePostSchema,
  getPostsSchema
} = require('../validation/validationPostSchema');

router.get('/posts', verifyAuth, getPosts);
router.get('/users/:userId/posts', verifyAuth, validationMiddleware(getPostsSchema), getPosts);
router.get('/posts/:postId', verifyAuth, validationMiddleware(getPostSchema), getPost);
router.patch('/posts/:postId', verifyAuth, validationMiddleware(updatePostSchema), updatePost);
router.delete('/posts/:postId', verifyAuth, validationMiddleware(deletePostSchema), deletePost);
router.post('/posts', verifyAuth, validationMiddleware(createPostSchema), createPost);

module.exports = router;

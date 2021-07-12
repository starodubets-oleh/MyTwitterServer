const express = require('express');
const router = express.Router();
const { createPost, getUserPost, updatePost, deletePost, getUserPosts } = require('../controllers/post');
const verifyAuth = require('../middleware/verifyAuth');
const validationMiddleware = require('../middleware/validationMiddleware');
const {
  getPostSchema,
  createPostSchema,
  updatePostSchema,
  deletePostSchema,
  getPostsSchema
} = require('../validation/validationPostSchema');

router.get('/users/:userId/posts', verifyAuth, validationMiddleware(getPostsSchema), getUserPosts);
router.get('/users/:userId/posts/:postId', verifyAuth, validationMiddleware(getPostSchema), getUserPost);
router.patch('/posts/:postId', verifyAuth, validationMiddleware(updatePostSchema), updatePost);
router.delete('/posts/:postId', verifyAuth, validationMiddleware(deletePostSchema), deletePost);
router.post('/posts', verifyAuth, validationMiddleware(createPostSchema), createPost);

module.exports = router;

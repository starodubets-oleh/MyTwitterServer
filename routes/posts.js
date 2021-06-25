const express = require('express');
const router = express.Router();
const { getPosts, createPost, getPost, updatePost, deletePost } = require('../controllers/post');
const verifyAuth = require('../middleware/verifyAuth');
const validationMiddleware = require('../middleware/validationMiddleware');
const {getPostSchema, createPostSchema, updatePostSchema, deletePostSchema, getPostsSchema} = require('../validation/validation')

router.get('/posts', verifyAuth, getPosts);
router.get('/user/:userId/posts', validationMiddleware(getPostsSchema), verifyAuth, getPosts);
router.get('/posts/:postId', validationMiddleware(getPostSchema), verifyAuth, getPost);
router.patch('/posts/:postId', validationMiddleware(updatePostSchema), verifyAuth, updatePost);
router.delete('/posts/:postId', validationMiddleware(deletePostSchema), verifyAuth, deletePost);
router.post('/posts', verifyAuth, validationMiddleware(createPostSchema), createPost);

module.exports = router;
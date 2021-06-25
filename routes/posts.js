const express = require('express');
const router = express.Router();
const verifyAuth = require('../middleware/verifyAuth');
const validation = require('../middleware/validationMiddleware');
const {
  updatePostSchema,
  createPostSchema,
  showPostsSchema,
  showPostSchema,
  deletePostSchema
} = require('../validation/validation');

const {
  showPosts,
  createPost,
  showPost,
  updatePost,
  deletePost
} = require('../controllers/post.controller');

router.get('/', verifyAuth, validation(showPostsSchema), showPosts);
router.get('/:id', verifyAuth, validation(showPostSchema), showPost);
router.patch('/:id', verifyAuth, validation(updatePostSchema), updatePost);
router.post('/', verifyAuth, validation(createPostSchema), createPost);
router.delete('/:id', verifyAuth, validation(deletePostSchema), deletePost);

module.exports = router;

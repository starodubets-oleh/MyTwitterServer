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
  createComment
} = require('../controllers/comment.controller');

router.post('/:postId', verifyAuth, createComment);
// router.delete('/:id', verifyAuth, validation(deletePostSchema), deletePost);

module.exports = router;

const express = require('express');
const router = express.Router();
const { createComment, updateComment, deleteComment, getComments } = require('../controllers/comment');
const verifyAuth = require('../middleware/verifyAuth');
const validationMiddleware = require('../middleware/validationMiddleware');
const {
  deleteCommentSchema,
  updateCommentSchema,
  createCommentSchema,
  getCommentSchema
} = require('../validation/validationCommentSchema');

router.get('/posts/:postId/comments', verifyAuth, validationMiddleware(getCommentSchema), getComments);
router.post('/posts/:postId/comments', verifyAuth, validationMiddleware(createCommentSchema), createComment);
router.patch('/comments/:commentId', verifyAuth, validationMiddleware(updateCommentSchema), updateComment);
router.delete('/comments/:commentId', verifyAuth, validationMiddleware(deleteCommentSchema), deleteComment);

module.exports = router;

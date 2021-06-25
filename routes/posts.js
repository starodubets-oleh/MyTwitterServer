const express = require('express');
const router = express.Router();
const verifyAuth = require('../middleware/verifyAuth');

const {
  showPosts,
  createPost,
  showPost,
  updatePost,
  deletePost
} = require('../controllers/post.controller');

router.get('/', verifyAuth, showPosts);
router.get('/:id', verifyAuth, showPost);
router.patch('/:id', verifyAuth, updatePost);
router.post('/', verifyAuth, createPost);
router.delete('/:id', verifyAuth, deletePost);

module.exports = router;

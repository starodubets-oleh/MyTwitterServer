const express = require('express');
const router = express.Router();

const {
  showPosts,
  createPost,
  showPost,
  updatePost,
  deletePost
} = require('../controllers/post.controller')

router.get("/posts", showPosts);
router.get('/posts/:id', showPost);
router.patch('/posts/:id', updatePost);
router.post('/posts', createPost);
router.delete('/posts/:id', deletePost);

module.exports = router;
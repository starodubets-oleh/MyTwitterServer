const express = require('express');
const router = express.Router();

const showPosts = require('../controllers/post.controller')

router.get("/", showPosts);

module.exports = router;
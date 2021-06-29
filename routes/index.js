const postsRoute = require('./posts');
const userRoute = require('./auth');
const commentsRoute = require('./comments');

module.exports = [
  postsRoute,
  userRoute,
  commentsRoute,
];

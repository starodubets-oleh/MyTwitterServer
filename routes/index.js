const postsRoute = require('./posts');
const userRoute = require('./user');
const commentsRoute = require('./comments');

module.exports = [
  postsRoute,
  userRoute,
  commentsRoute,
];

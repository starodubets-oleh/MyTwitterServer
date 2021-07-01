const postsRoute = require('./posts');
const userRoute = require('./auth');
const commentsRoute = require('./comments');
const usersRoute = require('./users');

module.exports = [
  postsRoute,
  userRoute,
  commentsRoute,
  usersRoute
];

const { bookshelf } = require('../configs/db');
const User = require('../models/User');
const Post = require('../models/Post');

const Comment = bookshelf.model('Comment', {
  tableName: 'comments',
  user() {
    return this.belongsTo(User, 'user_id', 'id')
  },
  post() {
    return this.belongsTo(Post, 'post_id', 'id')
  },
  hasTimestamps: true
});

module.exports = Comment;
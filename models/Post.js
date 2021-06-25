
const {bookshelf}  = require('../configs/db');
const User = require('../models/User');
const Comment = require('../models/Comment');

const Post = bookshelf.model('Post', {
  tableName: 'posts',
  comments() {
    return this.hasMany(Comment);
  },
  user() {
    return this.belongsTo(User, 'user_id', 'id')
  },
  hasTimestamps: true
});

module.exports = Post;

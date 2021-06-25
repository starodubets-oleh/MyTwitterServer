const { bookshelf } = require('../configs/db');
const Post = require('../models/Post');

const User = bookshelf.model('User', {
  tableName: 'users',
  post() {
    return this.hasMany(Post);
  },
  hasTimestamps: true
});
module.exports = User;
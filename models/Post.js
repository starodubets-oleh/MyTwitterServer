const { bookshelf } = require('../configs/db');

const Post = bookshelf.model('Post', {
  tableName: 'posts',
  comments() {
    return this.hasMany('Comment');
  },
  user() {
    return this.belongsTo('User', 'user_id');
  },
  hasTimestamps: true
});

module.exports = Post;

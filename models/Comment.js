const { bookshelf } = require('../configs/db');

const Comment = bookshelf.model('Comment', {
  tableName: 'comments',
  user() {
    return this.belongsTo('User', 'user_id');
  },
  post() {
    return this.belongsTo('Post', 'post_id');
  },
  hasTimestamps: true
});

module.exports = Comment;

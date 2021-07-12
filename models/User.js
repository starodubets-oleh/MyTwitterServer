const { bookshelf } = require('../configs/db');
const Post = require('../models/Post');

const User = bookshelf.model('User', {
  tableName: 'users',
  post() {
    return this.hasMany('Post');
  },
  comment() {
    return this.hasMany('Comment');
  },
  virtuals: {
    fullPath: {
      get() {
        return `${process.env.APP_URL}/images/${this.get('user_img')}`;
      }
    }
  },
  hasTimestamps: true
});
module.exports = User;

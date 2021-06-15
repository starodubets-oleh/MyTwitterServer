const Sequelize = require('sequelize');

const config = require('../config/config');

const sequelize = new Sequelize(config);

const Posts = sequelize.define('posts', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.DataTypes.INTEGER
  },
  massage: {
    type: Sequelize.DataTypes.STRING
  }
}, {
  timestamps: true
});

module.exports = Posts;
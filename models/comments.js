'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Post, {
        foreignKey: 'id',
        as: 'postId'
      });
      Comment.belongsTo(models.User, {
        foreignKey: 'id',
        as: 'userId'
      });
    }
  }
  Comment.init(
    {
      comment: DataTypes.TEXT,
    },
    {
      tableName: 'comments',
      sequelize,
      modelName: 'Comment'
    }
  );
  return Comment;
};

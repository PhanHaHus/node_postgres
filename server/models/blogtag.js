'use strict';
module.exports = (sequelize, DataTypes) => {
  var blogTag = sequelize.define('blogTag', {
    blogId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  blogTag.associate = function(models) {
    // associations can be defined here
  };
  return blogTag;
};
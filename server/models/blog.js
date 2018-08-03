'use strict';

module.exports = (sequelize, DataTypes) => {
  const BlogTag = require('../models').blogTag;
  const blog = sequelize.define('blog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  });
  blog.associate = (models) => {
    // blog.belongsToMany(models.Tag, { through: BlogTag, unique: false });
  };

  return blog;
};
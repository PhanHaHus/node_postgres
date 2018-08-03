module.exports = (sequelize, DataTypes) => {
    const members = sequelize.define('members', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: { type: Date, default: Date.now },
      updated_at: { type: Date, default: Date.now },
    });
  
    return members;
  };
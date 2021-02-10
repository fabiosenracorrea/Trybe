const User = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'users',
  });

  return user;
};

module.exports = User;

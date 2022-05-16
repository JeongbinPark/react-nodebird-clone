module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    charset:'utf8',
    collate: 'utf8_general_ci'
  });
  User.associate = (db) => {
    db.User.hasMany(db.Post);
    db.User.belongsToMany(db.Post, {through: 'Like'});
    db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings'});
    db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers'});
  };
  return User;
}
const Surgery = (sequelize, DataTypes) => {
  const surgery = sequelize.define("Surgery", {
    surgery_id: { type: DataTypes.INTEGER, primaryKey: true },
    specialty: DataTypes.STRING,
    doctor: DataTypes.STRING,
  }, {
    tableName: 'surgeries',
    timestamps: false,
  });

  return surgery;
};

module.exports = Surgery;

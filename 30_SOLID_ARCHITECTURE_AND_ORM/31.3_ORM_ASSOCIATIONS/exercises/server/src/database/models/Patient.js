const Patient = (sequelize, DataTypes) => {
  const patient = sequelize.define("Patient", {
    patient_id: { type: DataTypes.INTEGER, primaryKey: true },
    fullname: DataTypes.STRING,
    plan_id: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    tableName: 'patients',
    timestamps: false,
  });

  patient.associate = (models) => {
    patient.belongsTo(models.Plan,
      { foreignKey: 'plan_id', as: 'plan' });
  };

  return patient;
};

module.exports = Patient;

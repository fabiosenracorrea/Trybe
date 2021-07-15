const Plan = (sequelize, DataTypes) => {
  const plan = sequelize.define("Plan", {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  }, {
    tableName: 'plans',
    timestamps: false,
  });

  plan.associate = (models) => {
    plan.hasMany(
      models.Patient,
      { foreignKey: 'patient_id', as: 'patients' },
    );
  };

  return plan;
};

module.exports = Plan;

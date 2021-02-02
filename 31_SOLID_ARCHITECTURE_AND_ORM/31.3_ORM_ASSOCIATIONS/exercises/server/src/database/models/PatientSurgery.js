const PatientSurgery = (sequelize, DataTypes) => {
  const patient_surgery = sequelize.define(
    "PatientSurgery",
    {},
    { tableName: 'patient_surgeries', timestamps: false },
  );

  patient_surgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: patient_surgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });

    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: patient_surgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return patient_surgery;
};

module.exports = PatientSurgery;

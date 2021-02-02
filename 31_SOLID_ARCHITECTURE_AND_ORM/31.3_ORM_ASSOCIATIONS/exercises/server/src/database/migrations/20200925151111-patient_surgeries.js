'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('patient_surgeries', {
      patient_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'patients',
          key: 'patient_id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      surgery_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'surgeries',
          key: 'surgery_id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('patient_surgeries');
  },
};

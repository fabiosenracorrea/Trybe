"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PlansTable = await queryInterface.createTable("plans", {
      plan_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      coverage: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      price: {
        allowNull: false,
        type: Sequelize.DOUBLE,
      },
    });

    return PlansTable;
  },

  down: async (queryInterface) => await queryInterface.dropTable("plans"),
};

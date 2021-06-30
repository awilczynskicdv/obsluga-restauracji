"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("bills", {
      orderId: Sequelize.INTEGER,
      currency: Sequelize.STRING,
      value_pln: Sequelize.FLOAT,
      value_currency: Sequelize.FLOAT
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("bills");
  },
};
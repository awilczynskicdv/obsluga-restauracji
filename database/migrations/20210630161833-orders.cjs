"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orders", {
      table: Sequelize.STRING,
      status: Sequelize.ENUM('preparing', 'ready', 'served'),
      created: Sequelize.STRING,
      id: Sequelize.INTEGER,
      price_total: Sequelize.FLOAT
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("orders");
  },
};
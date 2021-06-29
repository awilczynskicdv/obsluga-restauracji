'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("meals", {
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      category: Sequelize.STRING,
      price: Sequelize.FLOAT
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("meals");
  }
};
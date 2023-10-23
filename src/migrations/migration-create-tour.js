"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Tour", {
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      duration: {
        type: Sequelize.INTEGER,
      },
      maxGroupSize: {
        type: Sequelize.INTEGER,
      },
      photo: {
        type: Sequelize.STRING,
      },
      desc: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      reviews: {
        type: Sequelize.STRING,
      },
      feature: {
        type: Sequelize.BOOLEAN,
      },
      city: {
        type: Sequelize.STRING,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Tour");
  },
};

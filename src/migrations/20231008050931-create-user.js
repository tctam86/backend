'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      username:{
        type: Sequelize.STRING
      },
      password:{
        type: Sequelize.STRING
      },
      email:{
        type: Sequelize.STRING
      },
      photo:{
        type: Sequelize.STRING
      },
      role:{
        type: Sequelize.STRING
      },
      createdAt:{
        type: Sequelize.DATE
      },
      updatedAt:{
        type: Sequelize.DATE
      }
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Films', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      film: {
        type: Sequelize.STRING
      },
      acteurs: {
        type: Sequelize.STRING
      },
      duree: {
        type: Sequelize.STRING
      },
      annee: {
        type: Sequelize.STRING
      },
      imageURL: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Films');
  }
};
"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("destinos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_regiao: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      nome_estado: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      nome_cidade: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
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
    await queryInterface.dropTable("destinos");
  }
};

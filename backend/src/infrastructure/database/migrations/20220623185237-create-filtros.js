"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("filtros", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      palavras_chave: {
        allowNull: false,
        type: Sequelize.STRING(400)
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
    await queryInterface.dropTable("filtros");
  }
};

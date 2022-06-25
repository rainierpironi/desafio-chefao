"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contato", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      assunto: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      mensagem: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      admin_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: "admin"
          },
          key: "id"
        },
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contato");
  }
};

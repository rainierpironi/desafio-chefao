"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("comentarios", {
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
      mensagem: {
        allowNull: false,
        type: Sequelize.STRING(256)
      },
      destinos_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: "destinos"
          },
          key: "id"
        },
        onDelete: "cascade",
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },      
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("comentarios");
  }
};

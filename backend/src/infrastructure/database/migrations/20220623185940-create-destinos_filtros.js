"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("destinos_filtros", {
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
      filtros_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: "filtros"
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
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("destinos_filtros");
  }
};

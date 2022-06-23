const db = require("../../../infrastructure/database"),
  { DataTypes } = require("sequelize");

const Posts = db.define(
  "filtros",
  {
    destinos_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: "id",
      references: {
        model: "destinos",
        key: "id"
      }
    },
    filtros_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: "id",
      references: {
        model: "filtros",
        key: "id"
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  },
  {
    tableName: "filtros"
  }
);

module.exports = Filtros;

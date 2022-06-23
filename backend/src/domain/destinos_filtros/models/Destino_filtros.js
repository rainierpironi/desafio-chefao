const db = require("../../../infrastructure/database"),
  { DataTypes } = require("sequelize");

const Destino_filtros = db.define(
  "destino_filtros",
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
    tableName: "destino_filtros"
  }
);

module.exports = Destino_filtros;

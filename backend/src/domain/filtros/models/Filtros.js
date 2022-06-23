const db = require("../../../infrastructure/database"),
  { DataTypes } = require("sequelize");

const Filtros = db.define(
  "filtros",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    palavras_chave: {
      allowNull: false,
      type: DataTypes.STRING(400)
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

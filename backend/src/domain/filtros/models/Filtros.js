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
    deletedAt: {
      allowNull: false,
      type: DataTypes.DATE
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
    tableName: "filtros",
    paranoid: true
  }
);

module.exports = Filtros;

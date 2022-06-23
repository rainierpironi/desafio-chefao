const db = require("../../../infrastructure/database"),
  { DataTypes } = require("sequelize");

const Destinos = db.define(
  "destinos",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome_regiao: {
      allowNull: false,
      type: DataTypes.STRING(256)
    },
    nome_estado: {
      allowNull: false,
      type: DataTypes.STRING(256)
    },
    nome_cidade: {
      allowNull: false,
      type: DataTypes.STRING(256)
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
    tableName: "destinos"
  }
);

module.exports = Destinos;

const db = require("../../../infrastructure/database"),
  { DataTypes } = require("sequelize");

const Comentarios = db.define(
  "comentarios",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nome: {
      allowNull: false,
      type: DataTypes.STRING(256)
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(256)
    },
    mensagem: {
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
    },
    destinos_id: {
      allowNull: false,
      type: DataTypes.INTEGER,      
      references: {
        model: "destinos",
        key: "id"
      }
    }
  },
  {
    tableName: "comentarios"
  }
);

module.exports = Comentarios;

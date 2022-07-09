const db = require("../../../infrastructure/database"),
  { DataTypes } = require("sequelize");

const Contato = db.define(
  "contato",
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
    assunto: {
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
  },  
);

module.exports = Contato;

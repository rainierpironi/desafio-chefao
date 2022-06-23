const Comentarios = require("./Comentarios"),
  Destinos = require("../../destinos/models/Destinos");

Comentarios.belongsTo(Destinos, {
  foreignKey: "id"
});

module.exports = {
  Comentarios,
  Destinos
};

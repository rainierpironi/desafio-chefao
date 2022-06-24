const Destinos = require("./Destinos"),
  Destinos_filtros = require("../../destinos_filtros/models/Destino_filtros"),
  Comentarios = require("../../comentarios/models/Comentarios");

Destinos.hasMany(Destinos_filtros, {
  foreignKey: "id"
});

Destinos.hasMany(Comentarios, {
  foreignKey: "id"
});

module.exports = {
  Destinos,
  Destinos_filtros,
  Comentarios
};

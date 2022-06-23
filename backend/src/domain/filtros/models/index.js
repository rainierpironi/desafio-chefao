const Filtros = require("./Filtros"),
  Destinos_filtros = require("../../destinos_filtros/models");

Filtros.hasMany(Destinos_filtros, {
  foreignKey: "id"
});

module.exports = {
  Filtros,
  Destinos_filtros
};

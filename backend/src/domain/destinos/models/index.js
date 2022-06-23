const Destinos = require("./Destinos"),
  Destinos_filtros = require("../../destinos_filtros/models/Destino_filtros");

Destinos.hasMany(Destinos_filtros, {
  foreignKey: "id"
});

module.exports = {
  Destinos,
  Destinos_filtros
};

const Destino_filtros = require("./Destino_filtros"),
  Destinos = require("../../destinos/models/Destinos"),
  Filtros = require("../../filtros/models/Filtros");

Destino_filtros.belongsTo(Destinos, {
  foreignKey: "id"
});

Destino_filtros.belongsTo(Filtros, {
  foreignKey: "id"
});

module.exports = {
  Destino_filtros,
  Destinos,
  Filtros
};

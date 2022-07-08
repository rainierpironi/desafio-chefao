const Destinos = require("./Destinos"),  
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

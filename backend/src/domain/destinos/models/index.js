const Destinos = require("./Destinos"),  
  Comentarios = require("../../comentarios/models/Comentarios");

Destinos.hasMany(Comentarios, {
  foreignKey: "id"
});

module.exports = {
  Destinos,  
  Comentarios
};

const Contato = require("./Contato"),
  Admin = require("../../admin/models");

Contato.belongsTo(Admin, {
  foreignKey: "id"
});

module.exports = {
  Contato,
  Admin
};

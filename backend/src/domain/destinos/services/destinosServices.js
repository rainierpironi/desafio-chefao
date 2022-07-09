const { Destinos } = require("../models/");

const destinosServices = {
  async criarDestino(data) {
    const novoDestino = await Destinos.create({ ...data });
    return novoDestino;
  },
  async listarDestinos(data) {
    const listaDestinos = await Destinos.findAll();
    return listaDestinos;
  },
  async existeRegiao(data) {
    const { nome } = data;
    const regiaoExiste = await Destinos.findOne({
      where: {
        nome_regiao: nome
      }
    });
    return regiaoExiste;
  },
  async existeEstado(data) {
    const { nome } = data;
    const estadoExiste = await Destinos.findOne({
      where: {
        nome_estado: nome
      }
    });
    return estadoExiste;
  },
  async existeCidade(data) {
    const { nome } = data;
    const cidadeExiste = await Destinos.findOne({
      where: {
        nome_cidade: nome
      }
    });
    return cidadeExiste;
  },
  async atualizarDestino(id, data) {
    const destinoAtualizado = await Destinos.update(
      {
        ...data
      },
      {
        where: {
          id
        }
      }
    );
    return destinoAtualizado;
  },
  async deletarDestino(data) {
    const { id } = data;
    const existeDestino = await Destinos.count({
      where: {
        id
      }
    });
    await Destinos.destroy({
      where: { id }
    });
    return existeDestino;
  }
};

module.exports = destinosServices;

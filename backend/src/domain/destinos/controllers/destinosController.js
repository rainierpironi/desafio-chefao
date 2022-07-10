const { Destinos } = require("../models/"),
  destinosServices = require("../services/destinosServices");

const DestinosController = {
  async criarDestino(req, res) {
    try {
      const novoDestino = await destinosServices.criarDestino(req.body);
      res.status(201).json(novoDestino);
    } catch (error) {
      console.error(error);
      return res.status(400).json("Não foi possível cadastrar novo destino");
    }
  },
  async listarDestinos(req, res) {
    try {
      const listaDestinos = await destinosServices.listarDestinos();
      res.status(200).json(listaDestinos);
    } catch (error) {
      res.json("Falha ao listar destinos");
      console.error(error);
    }
  },

  async listarDestinosNomes(req, res) {
    try {
      const existeRegiao = await destinosServices.existeRegiao(req.params);
      const existeEstado = await destinosServices.existeEstado(req.params);
      const existeCidade = await destinosServices.existeCidade(req.params);

      res.status(200).json({
        regiao: existeRegiao,
        estado: existeEstado,
        cidade: existeCidade
      });
    } catch (error) {
      res.status(404).json("Verfique os dados e tente novamente");
      console.error(error);
    }
  },

  async atualizarDestino(req, res) {
    try {
      const { id } = req.params;
      const {nome_regiao, nome_estado, nome_cidade} = req.body

      if (!nome_regiao || !nome_estado || !nome_cidade) {
        return res.status(400).json("Todas as infomações são obrigatórias!");
      }

      const destinoAtualizado = await destinosServices.atualizarDestino(
        id,
        req.body
      );

      res.status(201).json("Dados atualizados com sucesso!");
    } catch (error) {
      res.status(404).json("Verfique os dados e tente novamente");
      console.error(error);
    }
  },
  async deletarDestino(req, res) {
    try {
      const existeDestino = await destinosServices.deletarDestino(req.params);

      if (!existeDestino) {
        return res.status(400).json("Destino não encontrado");
      }

      return res.status(204).json("Destino deletado com sucesso");
    } catch (error) {
      res.json("Falha ao tentar deletar destino");
      console.error(error);
    }
  }
};

module.exports = DestinosController;

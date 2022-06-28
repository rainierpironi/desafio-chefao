const {Destinos, Destinos_filtros} = require('../models/')

const DestinosController = {
    async create(req, res) {
        try {
            const { nome_regiao, nome_estado, nome_cidade } = req.body;
            const novoDestino = await Destinos.create({
                nome_regiao,
                nome_estado,
                nome_cidade

            });

            res.status(201).json(novoDestino);

        }
        catch (error) {
            console.error(error);
            return res.json('Não foi possível cadastrar novo destino').status(400);
        };
    },
    async listarDestinos(req, res) {
        try {
           
            const listar = await Destinos.findAll();
            res.status(200).json(listar);
        } catch (error) {
            res.json('Falha ao listar destinos');
            console.error(error)
        }
    },

    // async listarDestinosId(req, res) {
    //     try {
    //       const { id } = req.params;
    //       const destino = await Destinos.findByPk(id);
    
    //       return res.status(200).json(destino);
    //     } catch (error) {
    //       return res.status(500).json('Falha ao buscar destino');
    //     }
    //   },


    async listarDestinosRegiao(req, res) {
        try {
            const {
                nome_regiao
            } = req.params;

            const existeRegiao = await Destinos.findOne({
                where: {
                    nome_regiao
                }
            });

            if (!existeRegiao) {
                return res.status(400).json('Região não encontrada');
            };

            const regiaoDestinos = await Destinos.findAll(
                {
                    where: {
                        nome_regiao : existeRegiao.nome_regiao
                       
                    }
                });

            res.status(200).json(regiaoDestinos);
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },

    async listarDestinosEstado(req, res) {
        try {
            const {
                nome_estado
            } = req.params;

            const existeEstado = await Destinos.findOne({
                where: {
                    nome_estado
                }
            });

            if (!existeEstado) {
                return res.status(400).json('Destino não encontrado');
            };

            const estadoDestinos = await Destinos.findAll(
                {
                    where: {
                        nome_estado : existeEstado.nome_estado
                       
                    }
                });

            res.status(200).json(estadoDestinos);
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },

    async listarDestinosCidade(req, res) {
        try {
            const {
                nome_cidade
            } = req.params; 
           
            const existeCidade = await Destinos.findOne({
                where: {
                    nome_cidade
                }
            });

            if (!existeCidade) {
                return res.status(400).json('Destino não encontrado');
            };

            const cidadeDestinos = await Destinos.findAll(
                {
                    where: {
                        nome_cidade : existeCidade.nome_cidade
                       
                    }
                });

            res.status(200).json(cidadeDestinos);
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },

      async atualizarDestino(req, res) {
        try {
            
            const {
                id
            } = req.params;
            
            const {
                nome_regiao, nome_estado, nome_cidade
            } = req.body;

            

            if (!nome_regiao || !nome_estado || !nome_cidade) {
                return res.status(400).json('Todas as infomações são obrigatórias!');
            }

            const destinoAtualizado = await Destinos.update({
                nome_regiao, nome_estado, nome_cidade
            }, {
                where: {
                    id:id
                }
            });
            res.status(201).json('Dados atualizados com sucesso!');
        } catch (error) {
            res.status(404).json('Verfique os dados e tente novamente');
            console.error(error);
        };
    },
    async deletarDestino(req, res) {
        try {
            
            const {
                id
            } = req.params;
            

            const existeDestino = await Destinos.count({
                where: {
                    id: id,
                }
            });

            if (!existeDestino) {
                return res.status(400).json('Destino não encontrado');
            }

            await Destinos.destroy({
                where: {
                    id: id
                }
            });

            res.status(204).json('Destino deletado com sucesso');
        } catch (error) {
            res.json('Falha ao tentar deletar destino')
            console.error(error);
        }
    },
    };
 


module.exports = DestinosController
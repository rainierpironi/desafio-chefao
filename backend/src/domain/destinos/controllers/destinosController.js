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
            res.status(201).json(listar);
        } catch (error) {
            res.json('Falha ao listar destinos');
            console.error(error)
        }
    },

    async listarDestinosId(req, res) {
        try {
          const { id } = req.params;
          const destino = await Destinos.findByPk(id);
    
          return res.status(200).json(destino);
        } catch (error) {
          return res.status(500).json('Falha ao buscar destino');
        }
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
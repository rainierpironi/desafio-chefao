const {Destinos, Destinos_filtros} = require('../models/')

const DestinosController = {
    async create(req, res) {
        try {
            const { nome_regiao, nome_estado, nome_cidade } = req.body;
            // if (!nome_regiao || !nome_estado || !nome_cidade) {
            //     throw new Error ( res.status(500).json('Todas as informações são obrigatórias!'));
                  
            //   }
            const novoDestino = await Destinos.create({
                nome_regiao,
                nome_estado,
                nome_cidade

            });
            
       
            res.status(201).json(novoDestino);

        }
        catch (error) {
            console.error(error);
            return res.status(400).json('Não foi possível cadastrar novo destino');
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


    async listarDestinosNomes(req, res) {
        try {
            const {
               nome
            } = req.params;

            const existeRegiao = await Destinos.findAll({
                where: {
                    nome_regiao: nome
                   
                }
            });
            const existeEstado = await Destinos.findAll({
                where: {
                    nome_estado: nome,
                   
                }
            });
            const existeCidade = await Destinos.findAll({
                where: {
                    nome_cidade: nome,
                   
                }
            });

           
            

            res.status(200).json({
                regiao: existeRegiao,
                estado: existeEstado,
                cidade: existeCidade

            });
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
const {Destinos} = require('../models/')

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
    };
 


module.exports = DestinosController
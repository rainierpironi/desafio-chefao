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
    }
}


module.exports = DestinosController
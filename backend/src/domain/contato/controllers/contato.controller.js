const Contato = require('../models/Contato');

const ContatoController = {
    async criaContato(req, res) {
        try {

            const { nome, email, assunto, mensagem } = req.body;
            
            const novoContato = await Contato.create({
                nome,
                email,
                assunto,
                mensagem,                
            });

            res.json(novoContato);
        }

        catch (error) {
            res.json('Não foi possível criar contato com admin');
            console.log(error)
            console.error(error);
        }
    },
    async listaComentarios(req, res) {
        try {
            const listContato = await Contato.findAll();
            res.status(201).json(listContato);
        }

        catch (error) {
            res.json('Falha ao listar os contatos');
            console.error(error)
        }
    },
}

module.exports = ContatoController
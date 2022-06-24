const Contato = require('../models/Contato');

const ContatoController = {
    async criaContato(req, res) {
        try {

            const { nome, email, assunto, mensagem } = req.body;

            if (!nome || !email || !assunto || !mensagem)
                return res.status(400).json({
                    message: 'Todas as informações são obrigatórias!'
                })
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
    }
}

module.exports = ContatoController
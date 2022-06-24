const Comentarios = require('../models');

const ComentarioController = {

    async criaComentario(req, res){
        try{
            const { nome, email, mensagem, destinos_id } = req.body

            if(!nome || !email || !mensagem || !destinos_id){
                return res.status(400).json({message: "Nome, email, mensagem e id de destinos são obrigatórios"})
            }
            
            const novoComentario = await Comentarios.create({
                nome,
                email, 
                mensagem,
                destinos_id
            })

            res.json(novoComentario)
        }

        catch (error) {
            console.error(error);
            res.json('Não foi possível criar um comentário');

        }
    },

    async listaComentarios(req, res) {
        try {
            const listPosts = await Comentarios.findAll();
            res.status(201).json(listPosts);
        }

        catch (error) {
            res.json('Falha ao listar os comentários');
            console.error(error)
        }
    },

    async listaComentariosIdDestino(req,res){
        
    },

    async atualizaComentario(req,res){

    },

    async deletaComentario(req,res){

    }
}

module.exports = ComentarioController
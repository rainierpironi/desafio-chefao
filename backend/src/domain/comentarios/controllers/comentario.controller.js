const Comentarios = require('../models/Comentarios');

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
        try {
            const { id } = req.params;
            const comentario = await Comentarios.findByPk(id);
      
            return res.json(comentario);
          } catch (error) {
            return res.status(500).json("Falha ao listar o comentário");
          }
    },

    async atualizaComentario(req,res){
        try{
            const {id} = req.params;
            const {nome, email, mensagem, destinos_id} = req.body;

            const atualizarComentario = await Comentarios.update(
                {
                    nome,
                    email,
                    mensagem,
                    destinos_id,
                },
                {
                    where: {
                        id,
                    }
                }
            );       
            const ComentarioUpdated = await Comentarios.findByPk(id);
            return res.status(200).json(ComentarioUpdated);
        } catch{            
            return res.status(400).json("Falha ao atualizar os comentários");
        }     
    },

    async deletaComentario(req,res){
        try {
            const { id } = req.params;
            await Comentarios.destroy({
                where: {
                  id,
                },
              });
        
              return res.sendStatus(204);
            } catch (error) {
              return res.status(500).json("Falha ao deletar o comentário");
            }
    }
}

module.exports = ComentarioController
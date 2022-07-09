const ComentarioServices = require('../services/comentariosService');
const comentarioServices = require('../services/comentariosService')

const ComentarioController = {

    async criaComentario(req, res) {
        try {            
            const novoComentario = await comentarioServices.criaComent(req.body)
            return res.status(201).json(novoComentario)
        }

        catch (error) {
            console.error(error);
            res.json('Não foi possível criar um comentário');

        }
    },

    async listaComentarios(req, res) {
        try {
            const listPosts = await comentarioServices.listaComents(req);

            if (!listPosts.length) {
                return res.status(404).json("Eita! Não foi feito nenhum post ainda");
            }

            res.status(201).json(listPosts);
        }

        catch (error) {
            res.json('Falha ao listar os comentários');
            console.error(error)
        }
    },

    async listaComentariosIdDestino(req, res) {
        try {
            const comentarios = await comentarioServices.listaComentIdDestino(req);

            return res.json(comentarios);
        } catch (error) {
            return res.status(500).json("Falha ao listar o comentário");
        }
    },

    async atualizaComentario(req, res) {
        try {

            const { id } = req.params;
            const checaComentario = await ComentarioServices.encontraComent(id);
            if (!checaComentario) {
                return res.status(400).json("Comentario não encontrado!");
            }

            const ComentarioUpdated = await comentarioServices.atualizaComent(req)
            return res.status(200).json(ComentarioUpdated);

        } catch {
            return res.status(400).json("Falha ao atualizar os comentários");
        }
    },

    async deletaComentario(req, res) {
        try {
            const { id } = req.params;
            const checaComentario = await ComentarioServices.encontraComent(id);
            if (!checaComentario) {
                return res.status(400).json("Comentario não encontrado!");
            }

            const postDeletado = await ComentarioServices.deletaComent(id);
            return res.status(204)

        } catch (error) {
            return res.status(500).json("Falha ao deletar o comentário");
        }
    }
}

module.exports = ComentarioController
const Comentarios = require('../models/Comentarios');

const ComentarioServices = {

    async criaComent(data) {
        const { nome, email, mensagem, destinos_id } = data

        const novoComent = await Comentarios.create({
            nome,
            email,
            mensagem,
            destinos_id
        })

        return novoComent;
    },

    async encontraComent(id) {
        const checaComent = await Comentarios.findOne({where:{id:id}});
        return checaComent;
      },

    async listaComents() {
        const listaComents = await Comentarios.findAll();
        return listaComents
    },

    async listaComentIdDestino(req) {
        const { id } = req.params;
        
        const listaComentIdDestino = await Comentarios.findAll({
            where:{
                destinos_id : id
            }
        })
        
        return listaComentIdDestino
    },

    async atualizaComent(req) {
        const { id } = req.params;
        const { nome, email, mensagem, destinos_id } = req.body;

        const atualizarComent = await Comentarios.update(
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
        const ComentUpdated = await Comentarios.findByPk(id);
        return ComentUpdated;
    },

    async deletaComent(id){
        const deletaComent = await Comentarios.destroy({
            where:{
                id
            }
        })

        return deletaComent
    }


}


module.exports = ComentarioServices;
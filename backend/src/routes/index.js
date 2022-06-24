const express = require('express');
const routes = express.Router();

const ComentarioController  = require('../domain/comentarios/controllers/comentario.controller');

routes.post('/comentario', ComentarioController.criaComentario)
routes.get('/comentario', ComentarioController.listaComentarios)
routes.get('/comentario/:id', ComentarioController.listaComentariosIdDestino)
routes.put('/comentario/:id', ComentarioController.atualizaComentario)
routes.delete('/comentario/:id', ComentarioController.deletaComentario)

module.exports = routes
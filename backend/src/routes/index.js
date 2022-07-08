const express = require('express');
const routes = express.Router();

const ComentarioController  = require('../domain/comentarios/controllers/comentario.controller');
const DestinosController = require('../domain/destinos/controllers/destinosController')


routes.post('/comentario', ComentarioController.criaComentario)
routes.get('/comentario', ComentarioController.listaComentarios)
routes.get('/comentario/:id', ComentarioController.listaComentariosIdDestino)
routes.put('/comentario/:id', ComentarioController.atualizaComentario)
routes.delete('/comentario/:id', ComentarioController.deletaComentario)

routes.post('/destino', DestinosController.create)
routes.get('/destino', DestinosController.listarDestinos)
routes.get('/destino/:nome', DestinosController.listarDestinosNomes)
routes.put('/destino/:id', DestinosController.atualizarDestino)
routes.delete('/destino/:id', DestinosController.deletarDestino)

module.exports = routes
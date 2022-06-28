const express = require('express');
const routes = express.Router();

const ComentarioController  = require('../domain/comentarios/controllers/comentario.controller');
const DestinosController = require('../domain/destinos/controllers/destinosController')
const ContatoController = require('../domain/contato/controllers/contato.controller')


routes.post('/comentario', ComentarioController.criaComentario)
routes.get('/comentario', ComentarioController.listaComentarios)
routes.get('/comentario/:id', ComentarioController.listaComentariosIdDestino)
routes.put('/comentario/:id', ComentarioController.atualizaComentario)
routes.delete('/comentario/:id', ComentarioController.deletaComentario)

routes.post('/destino', DestinosController.create)
routes.get('/destino', DestinosController.listarDestinos)
routes.get('/destino/regiao/:nome_regiao', DestinosController.listarDestinosRegiao)
routes.get('/destino/estado/:nome_estado', DestinosController.listarDestinosEstado)
routes.get('/destino/cidade/:nome_cidade', DestinosController.listarDestinosCidade)
routes.put('/destino/:id', DestinosController.atualizarDestino)
routes.delete('/destino/:id', DestinosController.deletarDestino)

routes.post('/contato', ContatoController.criaContato)

module.exports = routes
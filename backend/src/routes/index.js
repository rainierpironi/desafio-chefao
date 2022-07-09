const express = require("express");
const routes = express.Router();

const ComentarioController  = require('../domain/comentarios/controllers/comentario.controller');
const DestinosController = require('../domain/destinos/controllers/destinosController');
const ContatoController = require('../domain/contato/controllers/contato.controller');
const cadastroComentarioValidator = require("../domain/comentarios/validations/comentariosValidator");
const cadastroDestinosValidator = require("../domain/destinos/validations/destinosValidator");
const cadastroContatoValidator = require("../domain/contato/validations/contatoValidator");

routes.post('/comentario',cadastroComentarioValidator, ComentarioController.criaComentario)
routes.get('/comentario', ComentarioController.listaComentarios)
routes.get('/comentario/:id', ComentarioController.listaComentariosIdDestino)
routes.put('/comentario/:id', ComentarioController.atualizaComentario)
routes.delete('/comentario/:id', ComentarioController.deletaComentario)

routes.post('/destino', cadastroDestinosValidator, DestinosController.criarDestino)
routes.get('/destino', DestinosController.listarDestinos)
routes.get('/destino/:nome', DestinosController.listarDestinosNomes)
routes.put('/destino/:id', DestinosController.atualizarDestino)
routes.delete('/destino/:id', DestinosController.deletarDestino)

routes.post('/contato',cadastroContatoValidator, ContatoController.criaContato)
routes.get('/contato', ContatoController.listaComentarios)

module.exports = routes

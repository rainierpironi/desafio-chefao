const express = require('express')
const DestinosController = require('../domain/destinos/controllers/destinosController')


const routes = express.Router()

routes.post('/destino', DestinosController.create)
routes.get('/destino', DestinosController.listarDestinos)
routes.get('/destino/:id', DestinosController.listarDestinosId)


module.exports = routes
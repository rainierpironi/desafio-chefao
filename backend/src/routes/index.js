const express = require('express')
const DestinosController = require('../domain/destinos/controllers/destinosController')


const routes = express.Router()

routes.post('/destino', DestinosController.create)


module.exports = routes
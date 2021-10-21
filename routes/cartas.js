const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const vjController = require('../controllers/cartas')

//Servicio para procesar los datos del formulario  CREATE
router.post('/agregarCarta',vjController.postAgregarCarta)
//Consulta de Cartas  READ
router.get('/obtenerCarta',vjController.getObtenerCarta)

module.exports = router
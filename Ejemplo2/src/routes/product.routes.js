//Configurar direccionamiento de expresss
const express = require('express')
const { newProduct } = require('../controllers/product.controller')

//Importar el enrutador de express
const api = express.Router()

//Creacion de rutas
api.post('/newProduct', newProduct)

module.exports = api;




//Configurar direccionamiento de expresss
const express = require('express')
const { newProduct, addProduct } = require('../controllers/product.controller')

//Importar el enrutador de express
const api = express.Router()

//Creacion de rutas
api.post('/newProduct', newProduct)
api.post('/addProduct', addProduct)

module.exports = api;




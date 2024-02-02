'use strict'

const Product = require('../models/product.model') //<- Objeto / Instancia

                    //request / response
exports.newProduct = (req, res)=>{
    let data = req.body; //capturar la informacion que me envia el usuario
    if(Object.keys(data).length == 0) res.status(400).send({mesage: 'Missin data'})
    let product = new Product(data)
    product.save((err, productSaved)=>{
        if(err)
    })
    return res.send({message: 'Ok', data})
}
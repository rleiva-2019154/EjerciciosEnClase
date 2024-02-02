'use strict'

const Product = require('../models/product.model') //<- Objeto / Instancia

//version obsoleta
                    //request / response
exports.newProduct = (req, res)=>{
    let data = req.body; //capturar la informacion que me envia el usuario
    if(Object.keys(data).length == 0) return res.status(400).send({mesage: 'Missin data'})
    let product = new Product()
    product.name = data.name
    product.description = data.description
    product.price = data.price

    product.save((err, productSaved)=>{
        if(err){
            console.error(err)
            return res.status(500).send({message: 'Error saving data'})
        }else if(productSaved){
            return res.send({mesage: 'Product saved successfully'})
        }else{
            return res.status(404).send({message: 'Error'})
        }
    })
    return res.send({message: 'Ok', data})
}
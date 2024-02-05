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
            return res.send({message: 'Product saved successfully'})
        }else{
            return res.status(404).send({message: 'Error'})
        }
    })
}

    //Mejor versión actualmente //bienas prácticas
    /*exports.addProduct = async (req, res)=>{
        try{    
            let {name, description, price} = req.body //funcion
            let product = new Product()
            product.name = name
            product.description = description
            product.price = price
            await product.save()
            return res.send({message: 'Product saved successfully'})
        }catch(err){
            console.error(err)
            res.status(500).send({message: 'Error creating product'})
    }*/
    //Refactoring
exports.addProduct = async (req, res)=>{
    try{    
        let data = req.body //funcion
        let product = new Product(data)
        await product.save()
        return res.send({message: 'Product saved sucessfully'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error creating product', err})
    }
}
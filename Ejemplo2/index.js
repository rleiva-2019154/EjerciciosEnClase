'use strict'

//Levantar servidro HTTP
//Conectar a la DB

//CommonJS <- var/const

const mongoose = require('mongoose')
const express = require('express')

/*Promise
const connect = () =>{
    const uriMongo = 'mongodb://127.0.0.1:27017/Ejemplo2'
    mongoose.Promise = global.Promise
 
    mongoose.connect(uriMongo, {
        connectTimeoutMS: 2500,
        maxPoolSize: 50
    })
 
    .then(()=> console.log('connected to db'))
    .catch(err => console.error(err))
}
 
connect()*/

//Asyn/Await

const connect = async ()=>{
    try{
        const uriMongo = 'mongodb://127.0.0.1:27017/Ejemplo2'
        await mongoose.connect(uriMongo) // si esto falla -> catch
        console.log('Connected to DB')
    }catch(err){
        console.error(err)
    }
}

//Servidor de HTTP

//Configurar servidor
const app = express()
const port = 3000

//Levantar servidor
const initServer = ()=> app.listen(port, ()=> {
    console.log(`Listen on port ${port}`)
})

connect()
initServer()
/*mongoose.connect('mongodb://127.0.0.1:27017/Ejemplo2')//27017
console.log('Connected to DB')*/
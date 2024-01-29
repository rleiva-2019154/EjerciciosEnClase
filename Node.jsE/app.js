//ESModules - actual
import express from 'express' //import java.util...

const app = express(); // creando el servidor
const port = 3200;

/*
app.get -> obtener()
app.post
app.put
app.delete */

//URIS de acceso que puede entender el servidor
//method , path , handlre
app.get('/', (req, res)=>{
    res.send('Hello world')
})

// no es correcto por el metodo
app.get('/getId/:id', (req,res)=>{
    let id = req.params.id;
    let complexId = id + 58
    res.send(`Product with id ${complexId}`)
})

app.get('/user/:id/:phone?', (req, res)=>{
    let phone = req.params.phone ?? 'Sin configurar'
    res.send(`UserID is ${req.params.id}, with phone ${phone}`)
})

//Levanto el servidor
app.listen(port, ()=>{
    console.log('Server ir running in port ' + port)
})

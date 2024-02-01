const mongoose = require('mongoose')

//Esquema = Estructura
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    description: {
        type: String,
        maxLength: [50, `Can't be overcome 50 characters`],
        required: [true, 'Description is required']
    },
    price: {
        type: Number, 
        min: [0, 'Only number up 0'],
        required: [true, 'Price is required']
    }
})

module.exports = mongoose.model('Product', productSchema)// Para que el esquema sea reutilizable
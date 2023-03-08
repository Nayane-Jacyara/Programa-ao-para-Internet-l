const mongoose = require ("mongoose")

const produto = mongoose.model('produto', {
    nome: String,
    preco: Number
 }); 

 module.exports = produto
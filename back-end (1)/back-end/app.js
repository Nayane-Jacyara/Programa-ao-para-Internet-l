const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false})); // dados simples
app.use(bodyParser.json()); //json de entrada no body

app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Acces-Control-Allow-Header',
     'Origin, X-Requrested-With, Content-Type, Accept, Authorization'
     );

     if (req.method === 'OPTIONS'){
        res.header('Acces-Control-Allow-Methods', 'PUS, POST, PATCH, DELETE,, GET')
        res.status(200).send({});
     }

     next();
 });

app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

// Quando nao encontra rota, cair aqui.
app.use((req, res, next) => {
   const error = new Error('Nâo encontrado');
   error.status = 404;
   next(error);
});

app.use((error,req, res , next) => {
    res.status(error.status || 500);
    return res.send({
        error: {
        memsagem: error.memsage
        }
    })
})

mongoose
.connect('mongodb+srv://nayane:nayjacyaaa@cluster0.b9vsjkd.mongodb.net/produtos?retryWrites=true&w=majority').then(() => {
    console.log("Conectado ao banco");
    
}).catch((error) =>{
    console.log(error)
});
   
module.exports = app;
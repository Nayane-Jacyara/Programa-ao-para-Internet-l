const express = require('express');
const newLocal = 'express/lib/response';
const { json } = require(newLocal);
const router = express.Router();
const Produtos = require('../Produtos')

//retorna todos os produtos
router.get('/',async(req, res, next) => {
    
    try{
        const produtos = await Produtos.find()
        res.status(200).send({
        mensagem: produtos.json
        
        });
     }catch(error){
        res.status(500).send({
            mensagem: "error"
        
     })
    }
});
//insere um produto
router.post('/',(req, res, next) => {

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
     };  
    
     try{
        Produtos.create(produto)
        res.status(201).send({
            mensagem: 'iseriu produto',
            produtoCriando: produto
        });
     }catch(error){
        res.status(500).send({
            mensagem: "error"
        
     })
     }
});

 
//retona os dados dde um produto
router.get('/:id_produto', async(req, res, next) => {

    const id = req.params.id_produto
    
        try{
            await Produtos.findOne({_id: id})
            res.status(200).send({
                mensagem: 'voce passou um id',
                id : id
            });
         }catch(error){
            res.status(500).send({
                mensagem: "error"
            
         })
         }
    });
//altera um produto
router.patch('/:id_produto', async (req, res) => {

    const id = req.params.id_produto;

    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
     };  


    try{
        await Produtos.updateOne({_id: id}, produto)
        res.status(200).send({
            mensagem: 'produto alterando'
        });
     }catch(error){
        res.status(500).send({
            mensagem: "error"
        
        })
    
     }
});
//exclui um produto
router.delete('/:id_produto', async (req, res) => {

    const id = req.params.id_produto;

    try{
       await Produtos.deleteOne({_id: id})
        res.status(200).send({
            mensagem: 'produto excluido'
        });
     }catch(error){
        res.status(500).send({
            mensagem: "error"
        
     })
    }
});


module.exports = router;
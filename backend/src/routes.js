const express = require('express');
const routes = express.Router();


/*
======request :
    ex. rota /teste
.query  -> parametros no formato /teste?t=valor (pode incluir varios parametros como /teste?a=1&b=2&c=3)
.params -> parametros no formato /teste/1, na declaração da rota deve incluir  o nome da variavel que irá receber ex.app.post('/teste/:id/:nome',... ->  params.params.id e params.params.nome 
.body   -> parametros  em post
*/

routes.post('/teste', (request, response) => {
    const teste = request.params.id;

    console.log(request.body);

    return response.json({
        nome : 'teste',
        data : '12/23/545'
    });
});

module.exports = routes;
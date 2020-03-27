const express = require('express');
const crypto  = require('crypto');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;

/*
*======request :
*  ex. rota /teste
*    .query  -> parametros no formato /teste?t=valor (pode incluir varios parametros como /teste?a=1&b=2&c=3)
*    .params -> parametros no formato /teste/1, na declaração da rota deve incluir  o nome da variavel que irá receber ex.app.post('/teste/:id/:nome',... ->  params.params.id e params.params.nome 
*    .body   -> parametros  em post
*/
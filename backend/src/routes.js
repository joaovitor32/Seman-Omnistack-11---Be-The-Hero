const express= require('express');
const routes=express.Router();
const OngController=require('./controllers/OngController')
const IncidentController=require('./controllers/IncidentController')
const ProfileController=require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController');

routes.post('/sessions',SessionController.create)

routes.get('/profile',ProfileController.index)

routes.get('/ongs',OngController.index)

routes.post('/ongs',OngController.create)

routes.post('/incident',IncidentController.create);

routes.get('/incident',IncidentController.index)

routes.delete('/incidents/:id',IncidentController.delete)

module.exports=routes;
import express from 'express'
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classesCrontollers = new ClassesController()
const connectionController = new ConnectionsController

routes.get('/classes', classesCrontollers.index)
routes.post('/classes', classesCrontollers.create)

routes.get('/connections', connectionController.index)
routes.post('/connections', connectionController.create)

export default routes;
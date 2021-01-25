import express from 'express';

import UserController from '../controllers/UserController.js';

const routes = express.Router();

const userController = new UserController();

routes.get('/user', userController.show);
routes.get('/user/:id', userController.find);

routes.post('/user', userController.create);

routes.put('/user/:id', userController.update);

routes.delete('/user/:id', userController.delete);

export default routes;

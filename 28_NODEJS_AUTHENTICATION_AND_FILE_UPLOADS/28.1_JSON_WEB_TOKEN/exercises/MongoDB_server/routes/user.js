import express from 'express';

import UserController from '../controllers/UserController.js';
import SessionController from '../controllers/SessionController.js';

import ensureAuth from '../middlewares/auth.js';

const routes = express.Router();

const userController = new UserController();
const sessionController = new SessionController();

routes.post('/login', sessionController.create);

routes.get('/user', ensureAuth, userController.show);
routes.get('/user/:id', ensureAuth, userController.find);

routes.post('/user', userController.create);

routes.put('/user/:id', ensureAuth, userController.update);

routes.delete('/user/:id', ensureAuth, userController.delete);

export default routes;

const express = require('express');

const SessionController = require('../controllers/SessionController');
const UserController = require('../controllers/UserController');

const appRouter = express.Router();

const sessionController = new SessionController();
const userController = new UserController();

appRouter.post('/login', sessionController.create);
appRouter.post('/register', userController.create);

module.exports = appRouter;

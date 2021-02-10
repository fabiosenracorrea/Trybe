const express = require('express');

const userRoutes = require('./user.routes.js');

const appRouter = express.Router();

appRouter.use('/', userRoutes);

module.exports = appRouter;

const express = require('express');

const jokeRoutes = require('./joke.routes.js');

const appRouter = express.Router();

appRouter.use('/jokes', jokeRoutes);

module.exports = appRouter;

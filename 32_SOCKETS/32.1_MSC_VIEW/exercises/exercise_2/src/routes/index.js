const express = require('express');

const redirectRoutes = require('./redirect.routes.js');
const categoryRoutes = require('./category.routes.js');
const jokeRoutes = require('./joke.routes.js');

const appRouter = express.Router();

appRouter.use('/', redirectRoutes);
appRouter.use('/categories', categoryRoutes);
appRouter.use('/jokes', jokeRoutes);

module.exports = appRouter;

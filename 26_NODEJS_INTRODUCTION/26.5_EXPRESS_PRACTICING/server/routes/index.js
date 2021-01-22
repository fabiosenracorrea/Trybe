import express from 'express';

import loginRoutes from './login.js';
import btcRoutes from './btc.js';
import postRoutes from './posts.js';
import usersRoutes from './users.js';
import operationsRoutes from './operations.js';
import recipeRoutes from './recipe.js';

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/btc', btcRoutes);
routes.use('/posts', postRoutes);
routes.use('/', usersRoutes);
routes.use('/', operationsRoutes);
routes.use('/recipe', recipeRoutes);

export default routes;

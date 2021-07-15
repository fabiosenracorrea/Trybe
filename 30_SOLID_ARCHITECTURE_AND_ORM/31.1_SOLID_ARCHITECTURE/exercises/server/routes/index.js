import express from 'express';

import plantsRoutes from './plants.routes.js';

const appRoutes = express.Router();

appRoutes.use('/', plantsRoutes);

export default appRoutes;

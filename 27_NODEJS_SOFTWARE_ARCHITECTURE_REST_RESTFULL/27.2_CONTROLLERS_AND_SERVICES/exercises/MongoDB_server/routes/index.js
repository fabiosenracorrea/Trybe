import express from 'express';

import addressRoutes from './address.js';
import statisticRoutes from './statistic.js';

const routes = express.Router();

routes.use('/lookup', addressRoutes);
routes.use('/statistic', statisticRoutes);

export default routes;

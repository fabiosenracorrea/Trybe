import express from 'express';

import StatisticController from '../controllers/StatisticController.js';

const routes = express.Router();

const statisticController = new StatisticController();

routes.get('/', statisticController.show);

export default routes;

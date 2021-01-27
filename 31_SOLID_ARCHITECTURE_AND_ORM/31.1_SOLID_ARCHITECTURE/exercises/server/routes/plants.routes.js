import express from 'express';

import PlantsController from '../controllers/PlantsController.js';

const plantsRoutes = express.Router();

const plantsController = new PlantsController();

plantsRoutes.get('/plants', plantsController.show);
plantsRoutes.get('/sunny/:id', plantsController.filter);
plantsRoutes.get('/plants/:id', plantsController.find);
plantsRoutes.post('/plants', plantsController.create);
plantsRoutes.post('/plants/:id', plantsController.update);
plantsRoutes.delete('/plants/:id', plantsController.delete);

export default plantsRoutes;

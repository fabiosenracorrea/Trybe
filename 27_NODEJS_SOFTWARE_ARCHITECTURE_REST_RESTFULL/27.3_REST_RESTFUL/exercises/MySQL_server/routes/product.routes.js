import express from 'express';

import ProductController from '../controllers/ProductController.js';

const routes = express.Router();

const productController = new ProductController();

routes.get('/list', productController.show);
routes.get('/:id', productController.find);
routes.post('/add', productController.create);
routes.put('/update/:id', productController.update);
routes.delete('/remove/:id', productController.delete);

export default routes;

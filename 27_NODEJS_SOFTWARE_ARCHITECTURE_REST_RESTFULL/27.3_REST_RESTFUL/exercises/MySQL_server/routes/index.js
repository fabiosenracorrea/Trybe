import express from 'express';

import productRoutes from './product.routes.js';

const routes = express.Router();

routes.use('/products', productRoutes);

export default routes;

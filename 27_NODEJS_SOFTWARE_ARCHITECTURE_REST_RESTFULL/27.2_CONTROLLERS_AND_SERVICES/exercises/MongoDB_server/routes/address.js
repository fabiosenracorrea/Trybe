import express from 'express';

import AddressController from '../controllers/AddressController.js';

const routes = express.Router();

const addressController = new AddressController();

routes.get('/', addressController.find);

export default routes;

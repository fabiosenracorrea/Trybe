const { Router } = require('express');

const SurgeryController = require('../controllers/SurgeryController');

const surgeryRoutes = Router();

const surgeryController = new SurgeryController();

surgeryRoutes.get('/:doctorName', surgeryController.listWithPlans);

module.exports = surgeryRoutes;

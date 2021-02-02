const { Router } = require('express');

const PatientController = require('../controllers/PatientController');

const patientRoutes = Router();

const patientController = new PatientController();

patientRoutes.get('/plans', patientController.listWithPlans);
patientRoutes.get('/plans/:id', patientController.findByPlanID);
patientRoutes.get('/surgeries', patientController.listWithSurgeries);
patientRoutes.post('/', patientController.create);

module.exports = patientRoutes;

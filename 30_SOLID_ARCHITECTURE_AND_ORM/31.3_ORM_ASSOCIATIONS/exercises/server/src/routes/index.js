const { Router } = require('express');

const patientRoutes = require('./patient.routes.js');
const surgeryRoutes = require('./surgery.routes.js');

const appRoutes = Router();

appRoutes.use('/patients', patientRoutes);
appRoutes.use('/surgeries', surgeryRoutes);

module.exports = appRoutes;

const express = require('express');

const redirectRoutes = express.Router();

redirectRoutes.get('/', (_request, response) => {
  return response.redirect('/categories');
});

module.exports = redirectRoutes;

const { Router } = require('express');

const booksRoutes = require('./book.routes.js');

const appRoutes = Router();

appRoutes.use('/books', booksRoutes);

module.exports = appRoutes;

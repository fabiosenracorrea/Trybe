const { Router } = require('express');

const BookController = require('../controllers/BookController.js');

const booksRoutes = Router();

const bookController = new BookController()

booksRoutes.get('/', bookController.show);
booksRoutes.get('/:id', bookController.find);
booksRoutes.post('/', bookController.create);
booksRoutes.post('/:id', bookController.update);
booksRoutes.delete('/:id', bookController.delete);

module.exports = booksRoutes;

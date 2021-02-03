const express = require('express');

const CategoryModel = require('../models/Category.js');
const CategoryController = require('../controllers/CategoryController.js');

const jokeRoutes = express.Router();

const categoryModel = new CategoryModel();
const categoryController = new CategoryController(categoryModel);

jokeRoutes.get('/', categoryController.getCategories);

module.exports = jokeRoutes;

const express = require('express');

const JokeModel = require('../models/Joke.js');
const JokeController = require('../controllers/JokeController.js');

const jokeRoutes = express.Router();

const jokeModel = new JokeModel();
const jokeController = new JokeController(jokeModel);

jokeRoutes.get('/', jokeController.getJoke);

module.exports = jokeRoutes;

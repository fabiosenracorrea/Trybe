const { Router } = require('express');

const userRoutes = require('./user.routes');
const sessionRoutes = require('./session.routes');
const postRoutes = require('./post.routes');

const appRoutes = Router();

// required for tests
appRoutes.get('/', (_request, response) => response.send());

appRoutes.use('/user', userRoutes);
appRoutes.use('/login', sessionRoutes);
appRoutes.use('/post', postRoutes);

module.exports = appRoutes;

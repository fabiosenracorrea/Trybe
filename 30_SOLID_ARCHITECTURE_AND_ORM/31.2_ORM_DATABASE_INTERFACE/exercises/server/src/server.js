const express = require('express');
require('express-async-errors');

const handleErrors = require('./middlewares/handleErrors');

const appRoutes = require('./routes');

const server = express();

server.use(express.json());

server.use(appRoutes);

server.use(handleErrors);

server.listen(3333, () => console.log('Server Started'));

require('dotenv').config();

const express = require('express');
require('express-async-errors');

const appRoutes = require('./routes/index');

const handleErrors = require('./middlewares/handleErrors');

const app = express();

app.use(express.json());

app.use(appRoutes);

app.use(handleErrors);

app.listen(3000, () => console.log('Server Started on 3000!'));

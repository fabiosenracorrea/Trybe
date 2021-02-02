const bodyParser = require('body-parser');
const express = require('express');
require('express-async-errors');

const appRoutes = require('./routes');
const errorMiddleware = require('./middlewares/handleErrors');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(appRoutes);

app.use(errorMiddleware);

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`Server stated on Port: ${PORT}`);
});

const express = require('express');
require('express-async-errors');

const appRoutes = require('./routes/index.js');

const server = express();

server.set('view engine', 'ejs');
server.set('views', 'src/views');

server.use(express.json());

server.use(appRoutes);

server.use((err, request, response, next) => {
  console.log(err)

  return response.status(500).send(err.message);
})

server.listen(3333, () => console.log('Server Started'));

import 'dotenv/config.js';

import express from 'express';
import 'express-async-errors/index.js';

import AppError from './errors/AppError.js';

import appRoutes from './routes/index.js';

const server = express();

server.use(express.json());

server.use(appRoutes);

server.use((err, _, response, __) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ error: err.message });
  }

  console.log(err);

  return response.status(500).json({ error: "Internal Server Error" });
});

server.listen(3333, () => console.log('Server Started'));

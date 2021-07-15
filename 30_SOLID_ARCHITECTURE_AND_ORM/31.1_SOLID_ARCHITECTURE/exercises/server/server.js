import express from 'express';
import 'express-async-errors';

import appRoutes from './routes/index.js';
import errorMiddleware from './middlewares/error.js';

const server = express();

server.use(express.json());

server.use(appRoutes);

server.use(errorMiddleware);

server.listen(3333, () => console.log('Server Started!'));


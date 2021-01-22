import express from 'express';
import appRoutes from './routes.js';

const server = express();

server.use(appRoutes);

server.use((err, _, response, __) => {
  return response.status(500).json({ error: "Internal Server Error" })
})

server.listen(3333, () => console.log('Server Started'));

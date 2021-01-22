import express from 'express';
import 'express-async-errors';

import appRoutes from './routes/index.js';

const app = express();

app.use(express.json())

app.use(appRoutes);

app.use((err, request, response, next) => {
  return response.status(500).json({ error: 'Internal Server Error' })
});

app.listen(3333, () => console.log('Server Started!'))

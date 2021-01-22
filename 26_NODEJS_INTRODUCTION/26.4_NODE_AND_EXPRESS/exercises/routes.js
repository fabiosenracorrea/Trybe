import express from 'express';
import fs from 'fs';

const routes = express.Router();

routes.get('/ping', (request, response) => {
  return response.status(200).json({ message: 'Pong!' });
});

routes.get('/hello', (request, response) => {
  const { name, age } = request.body;

  if (age <= 17) {
    return response.status(401).json({ message: 'Unauthorized' });
  }

  return response.status(200).json({ message: `Hello, ${name}!` });
});

routes.put('/users/:name/:age', (request, response) => {
  const { name, age } = request.params;

  const message = `Seu nome é ${name} e você tem ${age} anos!`

  return response.status(200).json({ message });
});

routes.get('/simpsons', (request, response) => {
  const simpsonsText = fs.readFileSync('./simpsons.json', { encoding: '' })
  const simpsonsData = JSON.parse(simpsonsText);

  return response.status(200).json(simpsonsData);
});

routes.get('/simpsons/:id', (request, response) => {
  const { id } = request.params;

  const simpsonsText = fs.readFileSync('./simpsons.json', { encoding: '' })
  const simpsonsData = JSON.parse(simpsonsText);

  const singleSimpsonData = simpsonsData.find(simp => simp.id == id);

  if (!singleSimpsonData) {
    return response.status(404).json({ error: "ID not found." });
  }

  return response.status(200).json(singleSimpsonData);
});

export default routes;

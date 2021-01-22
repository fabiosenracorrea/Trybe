import express from 'express';

import validateLogin from '../utils/validateLogin.js';
import generateToken from '../utils/generateToken.js';

const loginRoutes = express.Router();

loginRoutes.post('/', (request, response) => {
  const { email, password } = request.body;

  const validInput = validateLogin({ email, password });

  if (!validInput) {
    return response.status(400).json({ error: 'email or password is incorrect' })
  }

  const token = generateToken();

  return response.status(201).json({ token });
})

export default loginRoutes;

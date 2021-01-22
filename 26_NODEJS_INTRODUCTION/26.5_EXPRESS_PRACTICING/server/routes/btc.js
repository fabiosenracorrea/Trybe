import express from 'express';
import axios from 'axios';

import validateToken from '../utils/validateToken.js';

const btcRoutes = express.Router();

btcRoutes.get('/price', async (request, response) => {
  const token = request.headers.authorization;

  const tokenIsValid = validateToken(token);

  if (!tokenIsValid) {
    return response.status(400).json({ error: 'Invalid token' })
  }

  const { data } = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");

  return response.status(201).json({ data });
})

export default btcRoutes;

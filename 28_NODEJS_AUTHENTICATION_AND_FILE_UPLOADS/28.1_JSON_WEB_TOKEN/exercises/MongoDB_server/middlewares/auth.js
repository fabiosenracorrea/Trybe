import jwt from 'jsonwebtoken';

import AppError from '../errors/AppError.js';
import authConfig from '../config/auth.js';


function ensureAuth(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Not authorized', 403);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret);

    const { sub } = decoded;

    request.user = {
      id: sub,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token', 401);
  }
}

export default ensureAuth;

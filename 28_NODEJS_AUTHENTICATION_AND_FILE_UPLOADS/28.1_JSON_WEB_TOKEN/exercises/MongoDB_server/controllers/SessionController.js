import jwt from 'jsonwebtoken';

import HashProvider from '../providers/hashProvider.js';
import User from '../database/models/User.js';
import AppError from '../errors/AppError.js';
import authConfig from '../config/auth.js';

const hashProvider = new HashProvider();

class SessionController {
  async create(request, response) {
    const { email, password } = request.body;

    if (!email || !password) {
      throw new AppError('Invalid data provided');
    }

    const userModel = new User();

    const user = await userModel.findByEmail(email);

    const passwordMatch = await hashProvider.compareHash(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Invalid Email/Password combination');
    }

    const { expiresIn, secret } = authConfig.jwt;

    const jwtPayload = {
      subject: `${user.id}`,
      expiresIn,
    }

    const token = jwt.sign({}, secret, jwtPayload);

    delete user.password;

    return response.status(201).json({ user, token });
  }
}

export default SessionController;

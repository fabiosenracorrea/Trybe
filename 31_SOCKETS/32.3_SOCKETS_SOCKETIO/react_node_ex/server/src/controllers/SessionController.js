const AppError = require('../errors/AppError');
const UserRepository = require('../database/repositories/UserRepository');
const HashProvider = require('../providers/hashProvider');
const CreateSessionService = require('../services/CreateSessionService')

class SessionController {
  async create(request, response) {
    const { username, password } = request.body;

    const email = username;

    if (!username || !password) {
      throw new AppError('Invalid Data Provided');
    }

    const userRepository = new UserRepository();
    const hashProvider = new HashProvider();
    const createSessionService = new CreateSessionService(userRepository, hashProvider);

    const possibleNewUserInfo = {
      username,
      password,
      email,
    };

    const { user, token } = await createSessionService.execute(possibleNewUserInfo);

    return response.status(201).json({ user, token });
  }
}

module.exports = SessionController;

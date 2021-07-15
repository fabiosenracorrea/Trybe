const AppError = require('../errors/AppError');
const UserRepository = require('../database/repositories/UserRepository');
const HashProvider = require('../providers/hashProvider');
const CreateUserService = require('../services/CreateUserService')

class UserController {
  async create(request, response) {
    const { username, password, email } = request.body;

    if (!username || !password || !email) {
      throw new AppError('Invalid Data Provided');
    }

    const userRepository = new UserRepository();
    const hashProvider = new HashProvider();
    const createUserService = new CreateUserService(userRepository, hashProvider);

    const possibleNewUserInfo = {
      username,
      password,
      email,
    };

    const newUser = await createUserService.execute(possibleNewUserInfo);

    return response.status(201).json(newUser);
  }
}

module.exports = UserController;

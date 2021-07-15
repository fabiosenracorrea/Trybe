const { sign } = require('jsonwebtoken')

const authConfig = require('../config/auth');
const AppError = require("../errors/AppError");

class CreateSessionService {
  constructor(userRepository, hashProvider) {
    this.userRepository = userRepository;
    this.hashProvider = hashProvider;
  }

  async execute({ username, password, email }) {
    const user = await this.userRepository.findUserByUsernameOrEmail({ email, username });

    if (!user) {
      throw new AppError('User not found');
    }

    const passwordMatch = await this.hashProvider.compareHash(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Invalid email/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: `${user.id}`,
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

module.exports = CreateSessionService;

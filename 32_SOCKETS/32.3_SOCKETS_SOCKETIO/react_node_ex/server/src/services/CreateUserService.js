const AppError = require("../errors/AppError");

class CreateUserService {
  constructor(userRepository, hashProvider) {
    this.userRepository = userRepository;
    this.hashProvider = hashProvider;
  }

  async execute({ username, password, email }) {
    const userAlreadyExists = await this.userRepository.findUserByUsernameOrEmail({ email, username });

    if (userAlreadyExists) {
      throw new AppError('Credentials already in use');
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const newUserToCreate = {
      username,
      email,
      password: hashedPassword,
    }

    const user = await this.userRepository.createUser(newUserToCreate);

    return user;
  }
}

module.exports = CreateUserService;

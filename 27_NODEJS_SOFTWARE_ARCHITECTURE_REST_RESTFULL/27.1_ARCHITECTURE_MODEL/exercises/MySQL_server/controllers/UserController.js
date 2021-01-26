import HashProvider from '../providers/hashProvider.js';
import User from '../database/models/User.js';
import AppError from '../errors/AppError.js';

const hashProvider = new HashProvider();

class UserController {
  async create(request, response) {
    const { first_name, last_name, email, password } = request.body;

    if (!first_name || !last_name || !email || !password) {
      throw new AppError('Invalid data provided');
    }

    const encryptedPassword = await hashProvider.generateHash(password);

    const userData = {
      first_name,
      last_name,
      email,
      password: encryptedPassword,
    }

    const userModel = new User();

    const user = await userModel.create(userData);

    return response.status(201).json({ user });
  }

  async show(request, response) {
    const userModel = new User();

    const users = await userModel.listAll();

    return response.status(201).json({ users });
  }

  async find(request, response) {
    const { id } = request.params;

    const userModel = new User();

    const user = await userModel.find(id);

    return response.status(201).json({ user });
  }

  async update(request, response) {
    const { id } = request.params;
    const { first_name, last_name, email, password } = request.body;

    if (!first_name || !last_name || !email) {
      throw new AppError('Invalid data provided');
    }

    let encryptedPassword = null;

    if (password) {
      encryptedPassword = await hashProvider.generateHash(password);
    }

    const userInfo = {
      id,
      first_name,
      last_name,
      email,
      password: encryptedPassword,
    }

    const userModel = new User();

    const user = await userModel.update(userInfo);

    return response.status(201).json({ user });
  }

  async delete(request, response) {
    const { id } = request.params;

    const userModel = new User();

    await userModel.delete(id);

    return response.status(204).json({ message: 'User deleted with success' });
  }
}

export default UserController;

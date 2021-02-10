const { Op } = require("sequelize");
const { User } = require('../models');

class UserRepository {
  async createUser({ username, email, password }) {
    const userInfo = {
      username,
      email,
      password,
    }

    const user = await User.create(userInfo);

    return user;
  }

  async findUserByUsernameOrEmail({ username, email }) {
    const user = await User.findOne({
      where: {
        [Op.or]: [
          { username },
          { email }
        ]
      }
    });

    return user;
  }
}

module.exports = UserRepository;

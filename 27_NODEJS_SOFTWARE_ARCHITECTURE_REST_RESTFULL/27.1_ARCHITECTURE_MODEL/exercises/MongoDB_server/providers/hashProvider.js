import bcrypt from 'bcryptjs';

class BCryptHashProvider {
  async generateHash(payload) {
    return bcrypt.hash(payload, 8);
  }

  async compareHash(payload, hashed) {
    return bcrypt.compare(payload, hashed);
  }
}

export default BCryptHashProvider;
import connection from '../index.js';
import AppError from '../../errors/AppError.js';

class User {
  async create(userInfo) {
    const { first_name, last_name, email, password } = userInfo;

    let data;

    try {
      [data] = await connection.execute(
        'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)',
        [first_name, last_name, email, password]
      );
    } catch (err) {
      throw new AppError('User email already exists.')
    }


    const [queryResult] = await connection.execute(
      `
        SELECT first_name, last_name, email, id
        FROM users
        WHERE id = ?
      `,
      [data.insertId]
    );

    const userData = queryResult[0];

    return userData;
  }

  async listAll() {
    const [users] = await connection.execute(
      `
        SELECT first_name, last_name, email, id
        FROM users
      `,
    );

    return users;
  }

  async find(userID) {
    const [queryResult] = await connection.execute(
      `
        SELECT first_name, last_name, email, id
        FROM users
        WHERE id = ?
      `,
      [userID]
    );

    const userData = queryResult[0];

    if (!userData) {
      throw new AppError('User not found.', 404);
    }

    return userData;
  }

  async update(userInfo) {
    const { first_name, last_name, email, password, id } = userInfo;

    if (password) {
      await connection.execute(
        `
          UPDATE users
          SET
            first_name = ?,
            last_name = ?,
            email = ?,
            password = ?
          WHERE
            id = ?
        `,
        [first_name, last_name, email, password, id]
      );
    } else {
      await connection.execute(
        `
          UPDATE users
          SET
            first_name = ?,
            last_name = ?,
            email = ?
          WHERE
            id = ?
        `,
        [first_name, last_name, email, id]
      );
    }

    const [queryResult] = await connection.execute(
      `
        SELECT first_name, last_name, email, id
        FROM users
        WHERE id = ?
      `,
      [id]
    );

    const updatedUserData = queryResult[0];

    return updatedUserData;
  }

  async delete(userID) {
    await connection.execute(
      `
        DELETE
        FROM users
        WHERE id = ?
      `,
      [userID]
    );
  }
}

export default User;

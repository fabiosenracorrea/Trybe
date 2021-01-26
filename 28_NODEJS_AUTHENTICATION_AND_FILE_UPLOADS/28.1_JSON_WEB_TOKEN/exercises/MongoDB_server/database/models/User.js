import connection from '../index.js';
import AppError from '../../errors/AppError.js';
import mongodb from 'mongodb';

class User {
  async create(userInfo) {
    const { first_name, last_name, email, password } = userInfo;

    const db = await connection();

    const [userWithWantedEmail] = await db.collection('users').find(
      { email }
    ).toArray();

    if (userWithWantedEmail) {
      throw new AppError('User email already registered by another account.');
    }

    const queryInfo = await db.collection('users').insertOne({
      first_name,
      last_name,
      email,
      password,
    });

    const [newUserData] = queryInfo.ops;

    delete newUserData.password;

    return newUserData;
  }

  async listAll() {
    const db = await connection();

    const users = await db.collection('users').find().toArray()

    const curatedUsers = users.map(user => {
      delete user.password;

      return user;
    })

    return curatedUsers;
  }

  async find(userID) {
    const db = await connection();

    const [userData] = await db.collection('users').find(mongodb.ObjectId(userID)).toArray();

    if (!userData) {
      throw new AppError('User not found.', 404);
    }

    delete userData.password;

    return userData;
  }

  async findByEmail(email) {
    const db = await connection();

    const [userData] = await db.collection('users').find({ email }).toArray();

    if (!userData) {
      throw new AppError('User not found.', 404);
    }

    return userData;
  }

  async update(userInfo) {
    const { first_name, last_name, email, password, id } = userInfo;

    const db = await connection();

    const userData = await db.collection('users').findOne(mongodb.ObjectId(id));

    if (!userData) {
      throw new AppError('User not found.', 404);
    }

    const newUserData = {
      ...userData,
      first_name,
      last_name,
      email,
      password: password ? password : userData.password,
    }

    await db.collection('users').updateOne(
      { _id: mongodb.ObjectId(id) },
      { $set: newUserData },
    );

    const updatedInfo = await db.collection('users').findOne(mongodb.ObjectId(id));

    delete updatedInfo.password;

    return updatedInfo;
  }

  async delete(userID) {
    const db = await connection();

    const userData = await db.collection('users').findOne(mongodb.ObjectId(userID));

    if (!userData) {
      throw new AppError('User not found.', 404);
    }

    await db.collection('users').deleteOne(
      { _id: mongodb.ObjectId(userID) },
    );
  }
}

export default User;

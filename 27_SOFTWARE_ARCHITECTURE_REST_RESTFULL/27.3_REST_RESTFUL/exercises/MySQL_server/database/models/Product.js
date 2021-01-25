import connection from '../index.js';
import AppError from '../../errors/AppError.js';

class User {
  async create(productInfo) {
    const { name, brand } = productInfo;

    let data;

    try {
      [data] = await connection.execute(
        'INSERT INTO products (name, brand) VALUES (?, ?)',
        [name, brand]
      );
    } catch (err) {
      throw new AppError('Name and brand combination already exists')
    }


    const newProductData = {
      id: data.insertId,
      name,
      brand,
    }

    return newProductData;
  }

  async listAll() {
    const [products] = await connection.execute(
      `
        SELECT *
        FROM products
      `,
    );

    return products;
  }

  async findByID(productID) {
    const [queryResult] = await connection.execute(
      `
        SELECT *
        FROM products
        WHERE id = ?
      `,
      [productID]
    );

    const productData = queryResult[0];

    if (!productData) {
      throw new AppError('Product not found.', 404);
    }

    return productData;
  }

  async update(productInfo) {
    const { id: productID, name, brand } = productInfo;

    const [queryResult] = await connection.execute(
      `
        SELECT *
        FROM products
        WHERE id = ?
      `,
      [productID]
    );

    const productData = queryResult[0];

    if (!productData) {
      throw new AppError('Product not found.', 404);
    }

    try {
      await connection.execute(
        `
          UPDATE products
          SET
            name = ?,
            brand = ?
          WHERE
            id = ?
        `,
        [name, brand, productID]
      );
    } catch (err) {
      throw new AppError('Product not updated')
    }

    const updatedProductData = {
      id: productID,
      name,
      brand,
    }

    return updatedProductData;
  }

  async delete(productID) {
    const id = Number(productID);

    const [queryResult] = await connection.execute(
      `
        SELECT *
        FROM products
        WHERE id = ?
      `,
      [id]
    );

    const productData = queryResult[0];

    if (!productData) {
      throw new AppError('User not found.', 404);
    }

    await connection.execute(
      `
        DELETE
        FROM products
        WHERE id = ?
      `,
      [id]
    );
  }
}

export default User;

import Product from '../database/models/Product.js';
import AppError from '../errors/AppError.js';

class ListProductsService {
  constructor() {
    this.productModel = new Product();
  }

  async execute(id) {
    const isNumericRegex = /^[0-9]$/;
    const isNumeric = isNumericRegex.test(id);

    if (!isNumeric) {
      throw new AppError('Invalid ID.');
    }

    const productID = Number(id);

    const product = await this.productModel.findByID(productID);

    return product;
  }
}

export default ListProductsService;

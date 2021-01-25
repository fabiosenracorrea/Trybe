import Product from '../database/models/Product.js';
import AppError from '../errors/AppError.js';

class ListProductsService {
  constructor() {
    this.productModel = new Product();
  }

  async execute({ id, name, brand }) {
    const isNumericRegex = /^[0-9]$/;
    const isNumeric = isNumericRegex.test(id);

    if (!name || !brand || !isNumeric) {
      throw new AppError('Invalid data provided.')
    }

    const productID = Number(id);

    const productInfo = {
      id: productID,
      name,
      brand,
    }

    const updatedProduct = await this.productModel.update(productInfo)

    return updatedProduct;
  }
}

export default ListProductsService;

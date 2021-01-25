import Product from '../database/models/Product.js';
import AppError from '../errors/AppError.js';

class ListProductsService {
  constructor() {
    this.productModel = new Product();
  }

  async execute({ name, brand }) {
    if (!name || !brand) {
      throw new AppError('Invalid data provided.')
    }

    const newProductInfo = {
      name,
      brand,
    }

    const newProduct = await this.productModel.create(newProductInfo)

    return newProduct;
  }
}

export default ListProductsService;

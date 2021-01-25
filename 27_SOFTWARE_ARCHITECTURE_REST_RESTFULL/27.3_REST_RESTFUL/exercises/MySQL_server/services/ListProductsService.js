import Product from '../database/models/Product.js';

class ListProductsService {
  constructor() {
    this.productModel = new Product();
  }

  async execute() {
    const products = await this.productModel.listAll();

    return products;
  }
}

export default ListProductsService;

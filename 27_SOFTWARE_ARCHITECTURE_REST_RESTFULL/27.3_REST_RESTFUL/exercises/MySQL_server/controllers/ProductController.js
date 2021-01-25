import AppError from '../errors/AppError.js';

import ListProductsService from '../services/ListProductsService.js';
import FindProductByIDService from '../services/FindProductByIDService.js';
import CreateProductService from '../services/CreateProductService.js';
import UpdateProductService from '../services/UpdateProductService.js';
import DeleteProductService from '../services/DeleteProductService.js';

class ProductController {
  async show(request, response) {
    const listProductsService = new ListProductsService();

    const products = await listProductsService.execute();

    return response.status(200).json({ products });
  }

  async find(request, response) {
    const { id } = request.params;

    const findProductByIDService = new FindProductByIDService();

    const product = await findProductByIDService.execute(id);

    return response.status(200).json(product);
  }

  async create(request, response) {
    const { name, brand } = request.body;

    const createProductService = new CreateProductService();

    const newProduct = await createProductService.execute({ name, brand });

    return response.status(201).json(newProduct);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, brand } = request.body;

    const updateProductService = new UpdateProductService();

    const newProduct = await updateProductService.execute({ name, brand, id });

    return response.status(201).json(newProduct);
  }

  async delete(request, response) {
    const { id } = request.params;

    const deleteProductService = new DeleteProductService();

    await deleteProductService.execute(id);

    return response.status(204).send();
  }
}

export default ProductController;

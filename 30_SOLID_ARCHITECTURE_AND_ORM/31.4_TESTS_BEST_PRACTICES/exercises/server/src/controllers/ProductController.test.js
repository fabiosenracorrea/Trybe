const mockProductModel = require('../models/fakes/FakeProduct');
const { getAllProducts, getProductById, createProduct, deleteProductById, editProductById } = require('./ProductController');

jest.mock('../models/Product.js', () => {
  return mockProductModel.FakeProduct;
});

const { mockedProducts } = mockProductModel;

describe('ProductController testing', () => {
  describe('get all products implementation', () => {
    it('should return a list of all products', () => {
      let expectedResponse = [];

      const mockRequest = {};
      const mockResponse = {
        status: jest.fn(),
        json: jest.fn().mockImplementation((products) => {
          expectedResponse = products;
        }),
      };

      getAllProducts(mockRequest, mockResponse);

      const expectedStatusCode = 200;
      expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(mockResponse.json).toHaveBeenCalled();

      expect(expectedResponse).toEqual(mockedProducts);
    });
  });

  describe('getProductById implementation', () => {
    it('should a product when a valid id is provided', () => {
      mockedProducts.forEach((product) => {
        const mockRequest = {
          params: { id: product.id }
        };

        let expectedProduct;

        const mockResponse = {
          status: jest.fn(),
          json: jest.fn().mockImplementation((productInfo) => {
            expectedProduct = productInfo;
          }),
        };

        getProductById(mockRequest, mockResponse);

        const expectedStatusCode = 200;
        expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
        expect(mockResponse.json).toHaveBeenCalled();

        expect(expectedProduct).toEqual(product);

      });
    });

    it('should return a 404 when product is not found', () => {
      const wrongID = 999999;

      const mockRequest = {
        params: { id: wrongID }
      };


      const mockResponse = {
        status: jest.fn(),
        json: jest.fn(),
      };

      getProductById(mockRequest, mockResponse);

      const expectedStatusCode = 404;
      expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(mockResponse.json).toHaveBeenCalled();

    });
  });

  describe('create product implementation', () => {
    it('should create and return correctly the new product', () => {
      const productToCreate = {
        name: 'Skol Beats',
        brand: 'Ambev',
      }

      const mockRequest = {
        body: productToCreate,
      };

      let returnedProduct;

      const mockResponse = {
        status: jest.fn(),
        json: jest.fn().mockImplementation((newProduct) => {
          returnedProduct = newProduct;
        }),
      };

      createProduct(mockRequest, mockResponse);

      expect(mockProductModel.FakeProduct.add).toHaveBeenCalled();

      const expectedStatusCode = 201;
      expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(mockResponse.json).toHaveBeenCalled();

      const expectedProduct = {
        name: productToCreate.name,
        brand: productToCreate.brand,
        id: mockedProducts.length,
      }

      expect(returnedProduct).toEqual(expectedProduct);
    });

    it('should return a 500 when creation errors occur', () => {
      const productToCreate = {
        name: 'Skol Beats',
        brand: 'Ambev',
      }

      const mockRequest = {
        body: productToCreate,
      };

      let returnedProduct;

      const mockResponse = {
        status: jest.fn(),
        json: jest.fn().mockImplementation((newProduct) => {
          returnedProduct = newProduct;
        }),
      };

      mockProductModel.FakeProduct.add.mockImplementationOnce(() => {
        throw new Error('Mocking an error during product creation');
      })

      createProduct(mockRequest, mockResponse);

      const expectedStatusCode = 500;
      expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(mockResponse.json).toHaveBeenCalled();

    });
  });

  describe('delete a product implementation', () => {
    it('should delete a product and return the remaining products', () => {
      mockedProducts.forEach((product) => {
        const mockRequest = {
          params: { id: product.id },
        };

        let returnedProducts;

        const mockResponse = {
          status: jest.fn(),
          json: jest.fn().mockImplementation((products) => {
            returnedProducts = products;
          }),
        };

        deleteProductById(mockRequest, mockResponse);

        expect(mockProductModel.FakeProduct.remove).toHaveBeenCalled();

        const expectedStatusCode = 204;
        expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
        expect(mockResponse.json).toHaveBeenCalled();

        const expectedProductProducts = mockedProducts.filter(prod => prod.id != product.id);

        expect(returnedProducts).toEqual(expectedProductProducts);
      });
    });

    it('should return a 500 when deletion errors occur', () => {
      const { id } = mockedProducts[0];

      const mockRequest = {
        params: { id },
      };

      const mockResponse = {
        status: jest.fn(),
        json: jest.fn(),
      };

      mockProductModel.FakeProduct.remove.mockImplementationOnce(() => {
        throw new Error('Mocking an error during product creation');
      })

      deleteProductById(mockRequest, mockResponse);

      const expectedStatusCode = 500;
      expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(mockResponse.json).toHaveBeenCalled();

    });
  });

  describe('add or update product implementation', () => {
    it('should add product and return when non existing ID is provided', () => {
      const nonExistingID = 999;

      const productToCreate = {
        name: 'Skol Beats',
        brand: 'Ambev',
      };

      const mockRequest = {
        body: productToCreate,
        params: {
          id: nonExistingID,
        }
      };

      let returnedProducts;
      const productsBefore = [...mockedProducts];

      const mockResponse = {
        status: jest.fn(),
        json: jest.fn().mockImplementation((products) => {
          returnedProducts = products;
        }),
      };

      editProductById(mockRequest, mockResponse);

      expect(mockProductModel.FakeProduct.addOrUpdate).toHaveBeenCalled();

      const expectedStatusCode = 201;
      expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(mockResponse.json).toHaveBeenCalled();

      const applicationIDLogic = productsBefore[productsBefore.length - 1].id + 1

      const createdProduct = {
        name: productToCreate.name,
        brand: productToCreate.brand,
        id: applicationIDLogic,
      };

      const expectedListOfProducts = [...productsBefore, createdProduct];

      expect(returnedProducts).toEqual(expectedListOfProducts);
    });

    it('should return a 500 when function errors occur', () => {
      const nonExistingID = 999;

      const productToCreate = {
        name: 'Skol Beats',
        brand: 'Ambev',
      };

      const mockRequest = {
        body: productToCreate,
        params: {
          id: nonExistingID,
        }
      };

      const mockResponse = {
        status: jest.fn(),
        json: jest.fn(),
      };

      mockProductModel.FakeProduct.addOrUpdate.mockImplementationOnce(() => {
        throw new Error('Mocking an error during product creation');
      })

      editProductById(mockRequest, mockResponse);

      const expectedStatusCode = 500;
      expect(mockResponse.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(mockResponse.json).toHaveBeenCalled();

    });
  });
})

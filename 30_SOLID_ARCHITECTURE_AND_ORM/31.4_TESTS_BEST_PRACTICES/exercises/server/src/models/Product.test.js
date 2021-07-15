const Product = require('./Product');

let mockedProducts = [
  { id: 1, name: "Cerveja Skol", brand: "Ambev" },
  { id: 2, name: "Monitor AGON", brand: "AOC" },
  { id: 3, name: "MacBook Air", brand: "Apple" }
];

jest.mock('fs', () => ({
  readFileSync: () => mockedProducts,
  writeFile: jest.fn(),
}));

const mockedProductsBase = mockedProducts;

describe('Product Model Testing', () => {
  beforeEach(() => {
    mockedProducts = mockedProductsBase;

    jest.spyOn(JSON, 'parse').mockImplementation(obj => obj);
    jest.spyOn(JSON, 'stringify').mockImplementation(obj => obj);
  })

  describe('getAll method testing', () => {
    it('should return all instances of products', () => {
      const products = Product.getAll();

      expect(products).toEqual(mockedProducts);
    });
  });

  describe('add method testing', () => {
    it('should append a new product with correct ID logic', () => {
      const productName = 'Skol Beats';
      const productBrand = 'Ambev';

      const expectedID = mockedProducts[mockedProducts.length - 1].id + 1;

      const productsBeforeAddition = [...mockedProductsBase];

      const newProduct = Product.add(productName, productBrand);

      const expectedNewProduct = {
        name: productName,
        brand: productBrand,
        id: expectedID,
      };

      expect(newProduct).toEqual(expectedNewProduct);

      const expectedProducts = [...productsBeforeAddition, expectedNewProduct];

      expect(mockedProducts).toEqual(expectedProducts);
    });
  });

  // all other methods would follow this...
})

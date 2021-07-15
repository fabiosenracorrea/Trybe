const mockedProducts = [
  { id: 1, name: "Cerveja Skol", brand: "Ambev" },
  { id: 2, name: "Monitor AGON", brand: "AOC" },
  { id: 3, name: "MacBook Air", brand: "Apple" }
];

function add(name, brand) {
  const newProduct = {
    name,
    brand,
    id: mockedProducts[mockedProducts.length - 1].id + 1,
  }

  mockedProducts.push(newProduct);

  return newProduct;
}

function addOrUpdate(id, name, brand) {
  const productIndex = mockedProducts.findIndex((product) => product.id === parseInt(id));

  const PRODUCT_INDEX_NOT_FOUND = -1;

  if (productIndex === PRODUCT_INDEX_NOT_FOUND) {
    const newId = mockedProducts[mockedProducts.length - 1].id + 1;
    const newProduct = { id: newId, name, brand };
    mockedProducts.push(newProduct);


    return mockedProducts;
  }

  mockedProducts[productIndex].name = name;
  mockedProducts[productIndex].brand = brand;

  return mockedProducts;
}

const FakeProduct = {
  getAll: () => mockedProducts,

  getById: (id) => mockedProducts.find(prod => prod.id == id) || null,

  add: jest.fn(add),

  remove: jest.fn((id) => mockedProducts.filter(prod => prod.id != id)),

  addOrUpdate: jest.fn(addOrUpdate),
}

module.exports = {
  FakeProduct,
  mockedProducts,
}


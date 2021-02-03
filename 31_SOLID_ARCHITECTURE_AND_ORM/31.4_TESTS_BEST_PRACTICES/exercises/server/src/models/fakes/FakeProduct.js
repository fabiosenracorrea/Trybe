const mockedProducts = [
  { id: 1, name: "Cerveja Skol", brand: "Ambev" },
  { id: 2, name: "Monitor AGON", brand: "AOC" },
  { id: 3, name: "MacBook Air", brand: "Apple" }
];

const FakeProduct = {
  getAll: () => mockedProducts,
  getById: (id) => mockedProducts.find(prod => prod.id == id) || null,
  add: jest.fn((name, brand) => ({ name, brand, id: mockedProducts.length })),
  remove: jest.fn((id) => mockedProducts.filter(prod => prod.id != id)),
}

module.exports = {
  FakeProduct,
  mockedProducts,
}


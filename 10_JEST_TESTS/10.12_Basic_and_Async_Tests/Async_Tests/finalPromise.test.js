const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

// async version
const getAnimal = async (name) => {
  const animal = Animals.find((animal) => animal.name === name);

  if (animal) {
    return animal;
  }

  throw 'Nenhum animal com esse nome!'
}

// promise Version
function getAnimal2(name) {
  return new Promise((resolve, reject) => {
    const animal = Animals.find((animal) => animal.name === name);

    if (animal) {
      return resolve(animal)
    }

    return reject('Nenhum animal com esse nome!')
  })
}
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal2('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal2('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});
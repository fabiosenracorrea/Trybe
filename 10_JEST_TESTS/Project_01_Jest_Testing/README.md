## Project 01 - JEST Unitary Tests

The first project of Trybe's 10th module, centered around designing functions and assertion tests using Jest.

### What was proposed here

As a literal copy/paste of the instructions:
---

### 1. Jest Assíncrono

Complete os testes do arquivo `test/asyncJest.spec.js` para que funcionem com código assíncrono.

### 2. Mock Functions

Crie mock functions no arquivo `test/mockFunctions.spec.js` para que os testes mockados 'sobrescrevam' o código definido na pasta `src`. A idéia é que as funções criadas a partir do Jest tenham prioridade na sua execução.

### 3. Mock APIs

Crie um API mock no arquivo `test/mockApi.spec.js` para que os testes do Jest utilizem retornos de API fixos e independentes de requisições.

Exemplo de resposta da API randomuser.me:

```js

{
  gender: 'female',
  name: { title: 'Ms', first: 'Deborah', last: 'Hanson' },
  location: {
    street: { number: 1299, name: 'Rochestown Road' },
    city: 'Birr',
    state: 'Wicklow',
    country: 'Ireland',
    postcode: 16223,
    coordinates: { latitude: '26.2451', longitude: '45.2995' },
    timezone: {
      offset: '+5:30',
      description: 'Bombay, Calcutta, Madras, New Delhi'
    }
  },
  email: 'deborah.hanson@example.com',
  login: {
    uuid: '45db2b1f-1c9a-4a80-9572-e46614f86c30',
    username: 'bluewolf366',
    password: 'iverson3',
    salt: 'XKOOGc2x',
    md5: '8cb7b4686f3869247b3ed189de780ea6',
    sha1: 'c24641f415cf36f4494ea4007fb3d77b47a6aad5',
    sha256: 'a7bdd079ead0adf21f30cee5b94e5581a9fa0d5fc8b3c1881dbc864dabc55a80'
  },
  dob: { date: '1965-10-01T06:35:49.694Z', age: 55 },
  registered: { date: '2009-02-11T05:48:39.772Z', age: 11 },
  phone: '021-953-7205',
  cell: '081-160-6277',
  id: { name: 'PPS', value: '0109675T' },
  picture: {
    large: 'https://randomuser.me/api/portraits/women/7.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/7.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/7.jpg'
  },
  nat: 'IE'
}

```

### 4. Setup e Teardown

Intercale funções entre os testes definidos no arquivo `test/setupTeardown.js`.

---

### Grade

This project got a **100%/100%** grade and can be checkout entirely on [here](https://github.com/tryber/sd-06-project-jest/pull/72).


#### Comments

In the 'real world', every project already in distribution should be constantly tested, in order to guarantee that everything is working as designed. But unlike what one might think, simply testing functions return values isn't enough to assure your application is working properly.

Thats way the *assert* lib we used before is not enough to test most of today's applications.

This project was interested to better understand how to use JEST to test code and better understand what's going on on each test.

###### Feedback

As always, any feedback or suggestion is welcomed.

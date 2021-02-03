## Instruções para realização dos exercícios

Nesse exercício, vamos utilizar uma aplicação já criada como base para escrever nossos testes.
Detalhes do projeto

Primeiro, crie um novo diretório para nosso projeto;
Crie um novo projeto:

```bash
$ npm init -y
```

Instale o pacote express :

```bash
$ npm install express
```

Instale o pacote body-parser para parsear o corpo das requisições:

```bash
$ npm install body-parser
```

Na raiz do nosso projeto, crie o arquivo index.js para configurarmos o Express:

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers/productController.js')
const middlewares = require('./middlewares.js')

const app = express();

app.use(express.json());
app.use(middlewares.log)
app.use(middlewares.checkAuthToken)

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/products', controllers.getAllProducts);

app.get('/product/:id', controllers.getProductById);

app.post('/product', controllers.createProduct);

app.delete('/product/:id', controllers.deleteProductById);

app.put('/product/:id', controllers.editProductById);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
```

Não vamos nos preocupar com acesso ao banco de dados. Crie uma pasta models e, dentro dela, o arquivo productModel.js . Dentro desse arquivo, vamos ter um CRUD completo utilizando como "banco" um arquivo JSON local:

```javascript
const fs = require('fs');

function getAll() {
  const rawData = fs.readFileSync('./products.json');
  const products = JSON.parse(rawData);

  return products;
}

function getById(id) {
  const rawData = fs.readFileSync('./products.json');

  const product = JSON.parse(rawData).find(
    (product) => product.id === parseInt(id)
  );

  return product;
}

function add(name, brand) {
  const rawData = fs.readFileSync('./products.json');
  const products = JSON.parse(rawData);

  const id = products[products.length - 1].id + 1;

  const product = { id, name, brand };
  products.push(product);

  fs.writeFile('./products.json', JSON.stringify(products), 'utf8', (err) => {
    if (err) throw err;
    console.log('write file ok');
  });

  return product;
}

function remove(id) {
  const rawData = fs.readFileSync('./products.json');
  const products = JSON.parse(rawData).filter(
    (product) => product.id !== parseInt(id)
  );

  fs.writeFile('./products.json', JSON.stringify(products), 'utf8', (err) => {
    if (err) throw err;
    console.log('write file ok');
  });

  return products;
}

function addOrUpdate(id, name, brand) {
  const rawData = fs.readFileSync('./products.json');
  const products = JSON.parse(rawData);

  const product = products.find((product) => product.id === parseInt(id));

  if (product) {
    product.name = name;
    product.brand = brand;

  } else {
    const newId = products[products.length - 1].id + 1;
    const newProduct = { id: newId, name, brand };
    products.push(newProduct);
  }

  fs.writeFile('./products.json', JSON.stringify(products), 'utf8', (err) => {
    if (err) throw err;
    console.log('write file ok');
  });

  return products;
}

module.exports = { add, remove, getAll, getById, addOrUpdate };


module.exports = Product;
```

Na raiz do nosso projeto, vamos criar o arquivo products.json . Esse será nosso "banco de dados":

```json
[
  { "id": 1, "name": "Cerveja Skol", "brand": "Ambev" },
  { "id": 2, "name": "Monitor AGON", "brand": "AOC" },
  { "id": 3, "name": "MacBook Air", "brand": "Apple" }
]
```

Vamos criar uma pasta controllers e, dentro dela, o arquivo productController.js :

```javascript
const ProductModel = require('./models/productModel.js');

const getAllProducts = (req, res) => {
  const products = ProductModel.getAll();

  res.status(200);
  res.json(products);
};

const getProductById = (req, res) => {
  const product = ProductModel.getById(req.params.id);

  if (product === null) {
    res.status(404);
    return res.send({ message: 'Produto não encontrado' });
  }

  res.status(200);
  res.json(product);
};

const createProduct = (req, res) => {
  const { id, name, brand } = req.body;

  try {
    const newProduct = ProductModel.add(id, name, brand);

    res.status(200);
    res.json(newProduct);
  } catch (e) {
    res.status(500);
    res.send({ message: 'Algo deu errado' });
  }
};

const deleteProductById = (req, res) => {
  try {
    const products = ProductModel.remove(req.params.id);

    res.status(200);
    res.json(products);
  } catch (e) {
    res.status(500);
    res.send({ message: 'Algo deu errado' });
  }
};

const editProductById = (req, res) => {
  const { name, brand } = req.body;

  try {
    const products = ProductModel.addOrUpdate(req.params.id, name, brand);

    res.status(200);
    res.json(products);
  } catch (e) {
    res.status(500);
    res.send({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProductById,
  editProductById,
};
```

Por último Crie agora o arquivo middlewares , na raiz do projeto:

```javascript
const isTokenValid = (token = '') => {
  const regex = /^([a-zA-Z0-9 _-]+)$/;
  return token.length === 16 && regex.test(token);
};

const log = (req, res, next) => {
  console.log(req.body, new Date())
  next()
}

const checkAuthToken = (req, res, next) => {
  if (isTokenValid(req.headers.authorization)) {
    next();
  } else {
    res.status(401).json({ message: 'Token inválido!' });
  }
};

module.exports = {
  checkAuthToken,
  log
}
```

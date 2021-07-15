const express = require('express');
const bodyParser = require('body-parser');
const ProductController = require('./controllers/ProductController')
const middlewares = require('./middlewares')

const app = express();

app.use(express.json());
app.use(middlewares.log)
app.use(middlewares.checkAuthToken)

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/products', ProductController.getAllProducts);

app.get('/product/:id', ProductController.getProductById);

app.post('/product', ProductController.createProduct);

app.delete('/product/:id', ProductController.deleteProductById);

app.put('/product/:id', ProductController.editProductById);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});

// productService.js
const express = require('express');
const bodyParser = require('body-parser');
const eventEmitter = require('./eventEmitter');
const Product = require('./productModel');

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/products', (req, res) => {
  const { id, name, price } = req.body;
  const newProduct = new Product(id, name, price);

  // Émettre un événement de création de produit
  eventEmitter.emit('nouveauProduit', newProduct);

  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log(`Service de gestion de produits écoutant sur le port ${port}`);
});

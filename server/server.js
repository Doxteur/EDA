const eventEmitter = require('../shared/eventEmitter');
// productService.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3003;

app.use(bodyParser.json());

// S'abonner à l'événement de nouvelle commande
eventEmitter.on('nouvelleCommande', ({ productId, quantity }) => {
  console.log(`Nouvelle commande reçue pour le produit ${productId} avec une quantité de ${quantity}`);
});

// S'abonner à l'événement de nouveau produit
eventEmitter.on('nouveauProduit', (newProduct) => {
  console.log('Nouveau produit créé :', newProduct);
});

app.listen(port, () => {
  console.log(`Service de gestion de produits écoutant sur le port ${port}`);
});

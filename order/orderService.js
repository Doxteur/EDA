// orderService.js
const express = require('express');
const bodyParser = require('body-parser');
const eventEmitter = require('./eventEmitter');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/orders', (req, res) => {
  const { productId, quantity } = req.body;

  // Émettre un événement de nouvelle commande
  eventEmitter.emit('nouvelleCommande', { productId, quantity });

  res.status(201).json({ message: 'Commande enregistrée avec succès' });
});



app.get('/test', (req, res) => {
  const productId = 123;
  const quantity = 2;
  eventEmitter.emit('nouvelleCommande', { productId, quantity });

  res.status(201).json({ message: 'Commande enregistrée avec succès, test' });
});

app.listen(port, () => {
  console.log(`Service de gestion de commandes écoutant sur le port ${port}`);
});

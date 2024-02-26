// app.js
const eventEmitter = require('eventEmitter');

// S'abonner à l'événement de nouvelle commande
eventEmitter.on('nouvelleCommande', ({ productId, quantity }) => {
  // Dans un projet réel, ici vous pourriez interagir avec la base de données, vérifier la disponibilité du produit, etc.
  console.log(`Nouvelle commande reçue pour le produit ${productId} avec une quantité de ${quantity}`);
});

// S'abonner à l'événement de nouveau produit
eventEmitter.on('nouveauProduit', (newProduct) => {
  // Dans un projet réel, ici vous pourriez interagir avec la base de données pour stocker le nouveau produit.
  console.log('Nouveau produit créé :', newProduct);
});

// Exemple d'émission d'un événement de nouvelle commande (simulé)
eventEmitter.emit('nouvelleCommande', { productId: '123', quantity: 2 });

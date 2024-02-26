// orderProcessor.js
const eventEmitter = require('../product/eventEmitter');

eventEmitter.on('nouvelleCommande', (commande) => {
  // Traitement de la nouvelle commande (exemple : affichage en console)
  console.log('Nouvelle commande reçue :', commande);

  // Émettre un événement de traitement de commande
  eventEmitter.emit('traiterCommande', commande);
});

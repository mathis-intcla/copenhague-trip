const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques depuis le dossier racine
app.use(express.static('.'));

// Gérer les routes SPA (Single Page Application)
app.get('*', (req, res) => {
  // Si c'est une route d'API ou un fichier, ne pas rediriger
  if (req.url.startsWith('/_next') || req.url.includes('.')) {
    return res.status(404).send('Not found');
  }
  
  // Pour toutes les autres routes, servir index.html
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Serveur statique démarré sur le port ${port}`);
  console.log(`🌐 Site accessible sur http://localhost:${port}`);
});
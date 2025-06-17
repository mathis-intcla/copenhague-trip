const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques générés par Next.js dans le dossier "out"
app.use(express.static(path.join(__dirname, 'out')));

// Gérer les routes SPA (Single Page Application)
app.get('*', (req, res) => {
  // Pour toutes les autres routes, servir le fichier index.html généré
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Serveur statique démarré sur le port ${port}`);
  console.log(`🌐 Site accessible sur http://localhost:${port}`);
});

/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Gérer toutes les requêtes avec Next.js
  server.all(/.*/, (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Serveur démarré sur le port ${PORT}`);
  });
});
## Copenhague Trip – Déploiement Vercel

Prérequis
- Node.js 18+ (Vercel fournit une version récente automatiquement)
- Compte Vercel relié à votre dépôt (GitHub/GitLab/Bitbucket)

Installation
```bash
npm install
```

Développement local
```bash
npm run dev
```

Build
```bash
npm run build
```

Déploiement sur Vercel
- Poussez votre code sur la branche distante
- Dans Vercel, “Import Project” → sélectionnez le dépôt
- Framework: Next.js (auto-détecté)
- Build command: `npm run build`
- Output: `.next` (par défaut)

Notes
- Aucun serveur custom requis (fichier `server.js` supprimé)
- App Router activé; pages en `src/app`
- Les assets dans `public/` sont servis automatiquement

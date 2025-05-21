# Voyage à Copenhague 2025

Application web collaborative pour organiser un voyage à Copenhague du 22 au 26 août 2025.

## Fonctionnalités

- 📅 Gestion des vols (horaires, billets)
- 🏠 Propositions et votes pour les logements
- 🔍 Partage de découvertes et inspirations
- 💡 Conseils pratiques pour le voyage
- ✅ To-do list collaborative
- 🌓 Mode sombre/clair

## Technologies Utilisées

- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma (PostgreSQL)
- Framer Motion
- Heroicons

## Prérequis

- Node.js 18+
- PostgreSQL
- npm ou yarn

## Installation

1. Cloner le repository :
```bash
git clone [URL_DU_REPO]
cd copenhague-trip
```

2. Installer les dépendances :
```bash
npm install
# ou
yarn install
```

3. Configurer la base de données :
- Créer une base de données PostgreSQL
- Copier le fichier `.env.example` vers `.env`
- Mettre à jour les variables d'environnement dans `.env`

4. Initialiser la base de données :
```bash
npx prisma migrate dev
```

5. Lancer l'application en mode développement :
```bash
npm run dev
# ou
yarn dev
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000)

## Structure du Projet

```
src/
├── app/                    # Pages de l'application
│   ├── flights/           # Gestion des vols
│   ├── accommodation/     # Gestion des logements
│   ├── discoveries/       # Découvertes et inspirations
│   ├── tips/             # Conseils pratiques
│   └── todo/             # To-do list collaborative
├── components/            # Composants réutilisables
├── lib/                   # Utilitaires et configurations
└── styles/               # Styles globaux
```

## Contribution

1. Créer une branche pour votre fonctionnalité
2. Commiter vos changements
3. Pousser vers la branche
4. Créer une Pull Request

## Licence

MIT 
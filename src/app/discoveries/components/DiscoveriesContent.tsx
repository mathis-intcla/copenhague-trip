'use client';

import { PlusIcon, LinkIcon } from "@heroicons/react/24/outline";

const demoDiscoveries = [
  { id: 1, title: 'Nyhavn', category: 'Lieu', author: 'Mathis', img: '/hero-copenhagen.jpg', link: 'https://www.visitcopenhagen.com/copenhagen/planning/nyhavn-gdk474735' },
  { id: 2, title: 'Tivoli', category: 'Activité', author: 'Agathe', img: '/todo-copenhagen.jpg', link: 'https://www.tivoli.dk/en/' },
  { id: 3, title: 'Noma', category: 'Restaurant', author: 'Chaima', img: '/flights-copenhagen.jpg', link: 'https://noma.dk' },
  { id: 4, title: 'Christiania', category: 'Culture', author: 'Erton', img: '/accommodation-copenhagen.jpg', link: 'https://www.visitcopenhagen.com/copenhagen/planning/christiania-gdk414392' },
  { id: 5, title: 'Design Museum', category: 'Musée', author: 'Mathis', img: '/window.svg', link: 'https://designmuseum.dk/' },
  { id: 6, title: 'Superkilen', category: 'Parc', author: 'Agathe', img: '/globe.svg', link: 'https://www.visitcopenhagen.com/copenhagen/planning/superkilen-park-gdk966428' },
];

export default function DiscoveriesContent({ compact = false }: { compact?: boolean }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto animate-fade-in">
        {!compact && (
          <>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Découvertes & Inspirations
              </h1>
              <button
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <PlusIcon className="h-5 w-5 mr-2" />
                Ajouter une Découverte
              </button>
            </div>

            {/* Formulaire d'ajout de découverte */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Partager une Découverte
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Titre
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Ex: Restaurant Noma"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Catégorie
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Sélectionner une catégorie</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="activity">Activité</option>
                    <option value="place">Lieu à visiter</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    rows={3}
                    placeholder="Décrivez ce que vous avez découvert..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Lien (TikTok, Instagram, Web)
                  </label>
                  <input
                    type="url"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="https://..."
                  />
                </div>
              </form>
            </div>
          </>
        )}

        {/* Masonry type Pinterest */}
        <div
          className="[column-count:1] sm:[column-count:2] lg:[column-count:3] [column-gap:0.75rem]"
          role="list"
          aria-label="Découvertes en grille masonry"
        >
          {demoDiscoveries.map((d) => (
            <article
              key={d.id}
              role="listitem"
              className="mb-3 break-inside-avoid rounded-2xl overflow-hidden card"
            >
              <a href={d.link} target="_blank" rel="noopener noreferrer" className="block group">
                {/* Utiliser img (images statiques publiques) pour éviter config Next/Image pendant export */}
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-auto object-cover group-hover:opacity-95 smooth"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {d.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">par {d.author}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {d.title}
                  </h3>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 
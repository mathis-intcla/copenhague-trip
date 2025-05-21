'use client';

import { motion } from "framer-motion";
import { PlusIcon, LinkIcon } from "@heroicons/react/24/outline";

export default function DiscoveriesContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
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

        {/* Liste des découvertes */}
        <div className="space-y-4">
          {/* Exemple de découverte */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Restaurant
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                  Noma - Restaurant Gastronomique
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Partagé par Agathe
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                Restaurant étoilé Michelin, connu pour sa cuisine nordique innovante. Réservation recommandée plusieurs mois à l'avance.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="h-5 w-5 mr-1" />
                Voir sur Instagram →
              </a>
            </div>
          </div>

          {/* Autre exemple */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Activité
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                  Balade en Bateau sur les Canaux
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Partagé par Chaima
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-400">
                Découvrez Copenhague depuis l'eau avec une croisière guidée sur les canaux historiques. Vue imprenable sur les monuments.
              </p>
            </div>
            <div className="mt-4 flex justify-end">
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="h-5 w-5 mr-1" />
                Voir sur TikTok →
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 
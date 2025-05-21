'use client';

import { PlusIcon, CheckCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function TodoContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            To-do List Collaborative
          </h1>
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Ajouter une Tâche
          </button>
        </div>

        {/* Formulaire d'ajout de tâche */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Nouvelle Tâche
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tâche
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Ex: Réserver les billets d&apos;avion"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Assigné à
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Sélectionner une personne</option>
                <option value="chaima">Chaima</option>
                <option value="erton">Erton</option>
                <option value="agathe">Agathe</option>
                <option value="mathis">Mathis</option>
              </select>
            </div>
          </form>
        </div>

        {/* Liste des tâches */}
        <div className="space-y-4">
          {/* Tâches à faire */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              À Faire
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-900 dark:text-white">
                    Réserver les billets d&apos;avion
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Mathis
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-gray-900 dark:text-white">
                    Rechercher des hébergements
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Agathe
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tâches terminées */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Terminées
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-500 dark:text-gray-400 line-through">
                    Créer le site de voyage
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Mathis
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-500 dark:text-gray-400 line-through">
                    Définir les dates du voyage
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserCircleIcon className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Chaima
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
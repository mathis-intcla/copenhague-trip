'use client';

import { PlusIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export default function TipsContent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Conseils & Informations Pratiques
          </h1>
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Ajouter un Conseil
          </button>
        </div>

        {/* Formulaire d'ajout de conseil */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Partager un Conseil
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Titre
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                placeholder="Ex: Transport depuis l'aéroport"
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
                <option value="transport">Transport</option>
                <option value="money">Monnaie & Budget</option>
                <option value="weather">Météo & Climat</option>
                <option value="language">Langue & Communication</option>
                <option value="other">Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Contenu
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                rows={4}
                placeholder="Partagez vos conseils et informations..."
              />
            </div>
          </form>
        </div>

        {/* Liste des conseils */}
        <div className="space-y-4">
          {/* Monnaie */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <InformationCircleIcon className="h-6 w-6 text-blue-500 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Monnaie & Budget
                </h3>
                <div className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <p>• La monnaie locale est la Couronne danoise (DKK)</p>
                  <p>• 1 EUR ≈ 7.45 DKK</p>
                  <p>• Les cartes bancaires sont acceptées partout</p>
                  <p>• Budget moyen par jour : 100-150€ par personne</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transport */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <InformationCircleIcon className="h-6 w-6 text-green-500 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Transport
                </h3>
                <div className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <p>• Métro et bus : Carte City Pass (24h/48h/72h)</p>
                  <p>• Vélos : Réseau de vélos en libre-service</p>
                  <p>• Taxis : Uber disponible, mais cher</p>
                  <p>• Aéroport : Métro direct vers le centre-ville (15 min)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Météo */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <InformationCircleIcon className="h-6 w-6 text-yellow-500 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Météo & Climat
                </h3>
                <div className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <p>• Août : Température moyenne 20°C</p>
                  <p>• Prévoir un parapluie (pluies fréquentes)</p>
                  <p>• Vêtements légers + veste pour le soir</p>
                  <p>• Jours longs (lever 5h30, coucher 21h)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Langue */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-start">
              <InformationCircleIcon className="h-6 w-6 text-purple-500 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Langue & Communication
                </h3>
                <div className="mt-2 space-y-2 text-gray-600 dark:text-gray-400">
                  <p>• Langue officielle : Danois</p>
                  <p>• Anglais parlé par presque tout le monde</p>
                  <p>• Quelques mots utiles :</p>
                  <p>  - Tak (Merci)</p>
                  <p>  - Hej (Bonjour)</p>
                  <p>  - Farvel (Au revoir)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
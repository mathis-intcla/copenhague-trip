'use client';

import React from 'react';

export default function AccommodationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Hébergement à Copenhague</h1>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Steel House Copenhagen</h2>
        <p className="mb-2 text-gray-600 dark:text-gray-300">Un hébergement moderne et confortable idéalement situé au centre-ville.</p>
        
        <h3 className="font-medium mt-4 mb-2 text-gray-900 dark:text-white">Avantages</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
          <li>Prix abordable</li>
          <li>Emplacement central</li>
          <li>Espaces communs conviviaux</li>
          <li>Cuisine partagée</li>
          <li>Wi-Fi gratuit</li>
        </ul>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Prix par nuit:</p>
            <p className="text-gray-600 dark:text-gray-300">100€</p>
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Prix total (7 nuits):</p>
            <p className="text-gray-600 dark:text-gray-300">700€</p>
          </div>
        </div>
        
        <div className="mt-4">
          <a 
            href="https://www.steelhousecopenhagen.com" 
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Visiter le site →
          </a>
        </div>
      </div>
    </div>
  );
} 
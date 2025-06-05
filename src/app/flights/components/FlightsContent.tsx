'use client';

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export default function FlightsContent() {
  // Références pour upload de billet (fichier)
  const allerFileRef = useRef<HTMLInputElement>(null);
  const retourFileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center">
      {/* Fond illustré */}
      <div className="absolute inset-0 w-full h-[320px] md:h-[400px] overflow-hidden rounded-3xl shadow-apple">
        <img
          src="/flights-copenhagen.jpg"
          alt="Vols Copenhague"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: 'brightness(0.85) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent dark:from-gray-900/80 dark:via-gray-900/30 dark:to-transparent backdrop-blur-xl rounded-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto pt-16 pb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center drop-shadow-lg">
          Informations des Vols
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vol Aller */}
          <FlightCard
            title="Vol Aller"
            defaultDate="2025-08-22"
            fileRef={allerFileRef}
          />
          {/* Vol Retour */}
          <FlightCard
            title="Vol Retour"
            defaultDate="2025-08-26"
            fileRef={retourFileRef}
          />
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 rounded-full shadow-apple text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 smooth"
          >
            <span className="mr-2">✈️</span>
            Enregistrer les Vols
          </button>
        </div>
      </div>
    </div>
  );
}

function FlightCard({ title, defaultDate, fileRef }: { title: string; defaultDate: string; fileRef: any }) {
  return (
    <div className="glass dark:glass-dark rounded-3xl shadow-apple p-6 flex flex-col gap-4 min-h-[320px]">
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white drop-shadow">
        {title}
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
          <input
            type="date"
            className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
            defaultValue={defaultDate}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Heure</label>
          <input
            type="time"
            className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Numéro de Vol</label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
            placeholder="Ex: SK1546"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Lien du Billet</label>
          <input
            type="url"
            className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Billet (PDF ou image)</label>
          <input
            type="file"
            accept=".pdf,image/*"
            ref={fileRef}
            className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth bg-white dark:bg-gray-700"
          />
        </div>
      </form>
    </div>
  );
} 
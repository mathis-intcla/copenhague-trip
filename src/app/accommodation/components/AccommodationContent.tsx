'use client';

import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";

const logementsDemo = [
  {
    id: 1,
    nom: "Appartement Design au Centre",
    proposePar: "Mathis",
    lien: "https://www.airbnb.fr/rooms/123456",
    avantages: [
      "Centre-ville, à 5 min à pied des attractions",
      "Appartement moderne et lumineux",
      "2 chambres, cuisine équipée",
      "Wifi gratuit",
    ],
    prixNuit: 150,
    prixTotal: 600,
    image: "/accommodation-copenhagen.jpg",
  },
];

export default function AccommodationContent() {
  const [logements, setLogements] = useState(logementsDemo);
  const [form, setForm] = useState({
    nom: "",
    lien: "",
    avantages: "",
    prixNuit: "",
    prixTotal: "",
    proposePar: "",
  });

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleAdd(e: any) {
    e.preventDefault();
    setLogements([
      ...logements,
      {
        id: Date.now(),
        nom: form.nom,
        proposePar: form.proposePar || "?",
        lien: form.lien,
        avantages: form.avantages.split("\n").filter(Boolean),
        prixNuit: Number(form.prixNuit),
        prixTotal: Number(form.prixTotal),
        image: "/accommodation-copenhagen.jpg",
      },
    ]);
    setForm({ nom: "", lien: "", avantages: "", prixNuit: "", prixTotal: "", proposePar: "" });
  }

  return (
    <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center">
      {/* Fond illustré */}
      <div className="absolute inset-0 w-full h-[320px] md:h-[400px] overflow-hidden rounded-3xl shadow-apple">
        <img
          src="/accommodation-copenhagen.jpg"
          alt="Logement Copenhague"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: 'brightness(0.85) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent dark:from-gray-900/80 dark:via-gray-900/30 dark:to-transparent backdrop-blur-xl rounded-3xl" />
      </div>
      <div className="relative z-10 w-full max-w-2xl mx-auto pt-16 pb-8 animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center drop-shadow-lg">
          Logements Proposés
        </h1>
        {/* Formulaire d'ajout */}
        <div className="glass dark:glass-dark rounded-3xl shadow-apple p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Ajouter un Logement</h2>
          <form className="space-y-4" onSubmit={handleAdd}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom du Logement</label>
                <input
                  type="text"
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
                  placeholder="Ex: Appartement au centre-ville"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Proposé par</label>
                <input
                  type="text"
                  name="proposePar"
                  value={form.proposePar}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
                  placeholder="Nom de la personne"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Lien (Airbnb, Booking, etc.)</label>
              <input
                type="url"
                name="lien"
                value={form.lien}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Avantages (une par ligne)</label>
              <textarea
                name="avantages"
                value={form.avantages}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
                rows={2}
                placeholder="Proximité, confort, équipements..."
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prix par Nuit (€)</label>
                <input
                  type="number"
                  name="prixNuit"
                  value={form.prixNuit}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prix Total (€)</label>
                <input
                  type="number"
                  name="prixTotal"
                  value={form.prixTotal}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white smooth"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-2 px-6 py-3 rounded-full shadow-apple text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 smooth"
            >
              Ajouter
            </button>
          </form>
        </div>
        {/* Liste des logements */}
        <div className="space-y-6">
          {logements.map((logement) => (
            <div key={logement.id} className="glass dark:glass-dark rounded-3xl shadow-apple p-6 flex flex-col md:flex-row gap-6 animate-fade-in">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={logement.image}
                  alt={logement.nom}
                  className="w-full h-32 md:h-40 object-cover object-center rounded-2xl shadow-apple"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{logement.nom}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">Proposé par {logement.proposePar}</p>
                  <div className="mt-2">
                    <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Avantages</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
                      {logement.avantages.map((a: string, i: number) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mt-4 gap-2">
                  <div>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{logement.prixNuit}€ / nuit</p>
                    <p className="text-gray-600 dark:text-gray-400">Total: {logement.prixTotal}€</p>
                  </div>
                  <a
                    href={logement.lien}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium mt-2 md:mt-0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir sur Airbnb →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
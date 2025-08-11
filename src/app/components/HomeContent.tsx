'use client';

import Link from "next/link";
import { CalendarIcon, UserGroupIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function HomeContent() {
  return (
    <div className="relative w-full min-h-[60vh] flex flex-col items-center justify-center">
      {/* Hero image avec effet de flou et overlay glassmorphism */}
      <div className="absolute inset-0 w-full h-[340px] md:h-[420px] overflow-hidden rounded-3xl">
        <img
          src="/hero-copenhagen.jpg"
          alt="Copenhague"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: 'brightness(0.85) blur(2px)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-transparent dark:from-gray-900/70 dark:via-gray-900/30 dark:to-transparent rounded-3xl" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center pt-16 pb-8 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg text-center mb-4">
          Notre Voyage à Copenhague
        </h1>
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6">
          <span className="pill">
            22 - 26 Août 2025
          </span>
          <span className="pill">
            Copenhague, Danemark
          </span>
          <span className="pill">
            Chaima, Erton, Agathe, Mathis
          </span>
        </div>
      </div>
      {/* Cartes d'accès rapide */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[-60px] px-2">
        <QuickLink href="/flights" title="Vols" desc="Gérez vos horaires et billets d'avion" />
        <QuickLink href="/accommodation" title="Logements" desc="Proposez et votez pour vos hébergements préférés" />
        <QuickLink href="/discoveries" title="Découvertes" desc="Partagez vos inspirations et découvertes" />
        <QuickLink href="/tips" title="Conseils" desc="Informations pratiques pour le voyage" />
        <QuickLink href="/todo" title="To-do List" desc="Liste collaborative des préparatifs" />
        <QuickLink href="/packing-list" title="Bagages" desc="Checklist interactive pour ne rien oublier" />
      </div>
    </div>
  );
}

function QuickLink({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link href={href} className="block card rounded-2xl p-5 hover:translate-y-[-2px] transition-transform min-h-[120px] flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white drop-shadow">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-1 flex-1">
        {desc}
      </p>
      <span className="text-blue-600 dark:text-blue-400 text-xs font-medium mt-2">Accéder →</span>
    </Link>
  );
} 
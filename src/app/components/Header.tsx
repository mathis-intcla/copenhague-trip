'use client';

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/flights", label: "Vols" },
  { href: "/accommodation", label: "Hébergement" },
  { href: "/discoveries", label: "Découvertes" },
  { href: "/tips", label: "Conseils" },
  { href: "/todo", label: "Todo" },
  { href: "/map", label: "Carte" },
  { href: "/packing-list", label: "Bagages" },
  { href: "/payments", label: "Paiements" },
  { href: "/weather", label: "Météo" },
  { href: "/news", label: "Actualités" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full px-0 pt-4 pb-2 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl shadow-lg rounded-b-3xl">
      <div className="max-w-5xl mx-auto flex flex-col items-center px-3">
        <div className="w-full flex items-center justify-between">
          <Link href="/" className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2 drop-shadow-lg">
          Copenhague 2025
          </Link>
          <ThemeToggle />
        </div>
        <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-white/70 hover:backdrop-blur-md hover:shadow transition dark:hover:bg-gray-800/70"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
} 
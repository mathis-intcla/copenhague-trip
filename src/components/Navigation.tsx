'use client';

import Link from "next/link";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navigation() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
            Copenhague 2025
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/flights" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Vols
            </Link>
            <Link href="/accommodation" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Logements
            </Link>
            <Link href="/discoveries" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Découvertes
            </Link>
            <Link href="/tips" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Conseils
            </Link>
            <Link href="/todo" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              To-do
            </Link>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 
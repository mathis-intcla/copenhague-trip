import { motion } from "framer-motion";
import Link from "next/link";
import { CalendarIcon, UserGroupIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Voyage à Copenhague
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <CalendarIcon className="h-6 w-6" />
            <span>22 - 26 Août 2025</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <MapPinIcon className="h-6 w-6" />
            <span>Copenhague, Danemark</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
            <UserGroupIcon className="h-6 w-6" />
            <span>Chaima, Erton, Agathe, Mathis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/flights" className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Vols</h2>
            <p className="text-gray-600 dark:text-gray-400">Gérez vos horaires et billets d'avion</p>
          </Link>

          <Link href="/accommodation" className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Logements</h2>
            <p className="text-gray-600 dark:text-gray-400">Proposez et votez pour vos hébergements préférés</p>
          </Link>

          <Link href="/discoveries" className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Découvertes</h2>
            <p className="text-gray-600 dark:text-gray-400">Partagez vos inspirations et découvertes</p>
          </Link>

          <Link href="/tips" className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Conseils</h2>
            <p className="text-gray-600 dark:text-gray-400">Informations pratiques pour le voyage</p>
          </Link>

          <Link href="/todo" className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">To-do List</h2>
            <p className="text-gray-600 dark:text-gray-400">Liste collaborative des préparatifs</p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 
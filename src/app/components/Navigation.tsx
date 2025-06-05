'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="font-bold text-lg">Copenhague 2025</Link>
        <div className="flex space-x-4">
          <Link 
            href="/flights" 
            className={`hover:underline ${pathname === '/flights' ? 'text-blue-500' : ''}`}
          >
            Vols
          </Link>
          <Link 
            href="/accommodation" 
            className={`hover:underline ${pathname === '/accommodation' ? 'text-blue-500' : ''}`}
          >
            Hébergement
          </Link>
          <Link 
            href="/discoveries" 
            className={`hover:underline ${pathname === '/discoveries' ? 'text-blue-500' : ''}`}
          >
            Découvertes
          </Link>
          <Link 
            href="/tips" 
            className={`hover:underline ${pathname === '/tips' ? 'text-blue-500' : ''}`}
          >
            Conseils
          </Link>
          <Link 
            href="/todo" 
            className={`hover:underline ${pathname === '/todo' ? 'text-blue-500' : ''}`}
          >
            Todo
          </Link>
          <Link 
            href="/map" 
            className={`hover:underline ${pathname === '/map' ? 'text-blue-500' : ''}`}
          >
            Carte
          </Link>
          <Link 
            href="/packing-list" 
            className={`hover:underline ${pathname === '/packing-list' ? 'text-blue-500' : ''}`}
          >
            Bagages
          </Link>
          <Link 
            href="/payments" 
            className={`hover:underline ${pathname === '/payments' ? 'text-blue-500' : ''}`}
          >
            Paiements
          </Link>
          <Link 
            href="/weather" 
            className={`hover:underline ${pathname === '/weather' ? 'text-blue-500' : ''}`}
          >
            Météo
          </Link>
          <Link 
            href="/news" 
            className={`hover:underline ${pathname === '/news' ? 'text-blue-500' : ''}`}
          >
            Actualités
          </Link>
        </div>
      </div>
    </nav>
  );
} 
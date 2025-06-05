import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voyage à Copenhague",
  description: "Organisation du voyage à Copenhague - Août 2025",
};

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

function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayed, setDisplayed] = useState(children);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
    const timeout = setTimeout(() => {
      setDisplayed(children);
      setTransition(false);
    }, 350);
    return () => clearTimeout(timeout);
  }, [pathname, children]);

  return (
    <div
      className={`transition-transform duration-500 ease-[cubic-bezier(.4,0,.2,1)] will-change-transform ${transition ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}
    >
      {displayed}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className + " bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc] dark:from-[#181c20] dark:to-[#23272f] min-h-screen transition-colors duration-300"}>
        <header className="sticky top-0 z-30 w-full px-0 pt-4 pb-2 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl shadow-lg rounded-b-3xl">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <Link href="/" className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2 drop-shadow-lg">
              Copenhague 2025
            </Link>
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
        <main className="max-w-3xl mx-auto w-full px-2 md:px-0 py-6">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
} 
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voyage à Copenhague",
  description: "Organisation du voyage à Copenhague - Août 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <nav className="bg-gray-100 dark:bg-gray-800 p-4 shadow-md">
          <div className="container mx-auto flex flex-wrap justify-between items-center">
            <Link href="/" className="font-bold text-lg">Copenhague 2025</Link>
            <div className="flex space-x-4">
              <Link href="/flights" className="hover:underline">Vols</Link>
              <Link href="/accommodation" className="hover:underline">Hébergement</Link>
              <Link href="/discoveries" className="hover:underline">Découvertes</Link>
              <Link href="/tips" className="hover:underline">Conseils</Link>
              <Link href="/todo" className="hover:underline">Todo</Link>
              <Link href="/map" className="hover:underline">Carte</Link>
              <Link href="/packing-list" className="hover:underline">Bagages</Link>
              <Link href="/payments" className="hover:underline">Paiements</Link>
              <Link href="/weather" className="hover:underline">Météo</Link>
              <Link href="/news" className="hover:underline">Actualités</Link>
            </div>
          </div>
        </nav>
        <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200 p-4">
          {children}
        </main>
      </body>
    </html>
  );
} 
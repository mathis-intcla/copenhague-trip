import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import PageTransition from "./components/PageTransition";

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
      <body className={inter.className + " bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc] dark:from-[#181c20] dark:to-[#23272f] min-h-screen transition-colors duration-300"}>
        <Header />
        <main className="max-w-5xl mx-auto w-full px-2 md:px-0 py-6">
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
} 
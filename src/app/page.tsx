// import HomeContent from './components/HomeContent'; // Commenté

export default function Home() {
  // return <HomeContent />; // Commenté
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 animate-fade-in">Voyage à Copenhague 2025</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">À propos du voyage</h2>
          <p className="mb-4">Bienvenue sur notre plateforme d'organisation pour notre voyage à Copenhague en août 2025!</p>
          <p>Ce site nous permettra de centraliser toutes les informations importantes concernant notre séjour.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md animate-fade-in">
          <h2 className="text-xl font-semibold mb-4">Sections disponibles</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Vols et transport</li>
            <li>Hébergement</li>
            <li>Découvertes et activités</li>
            <li>Conseils pratiques</li>
            <li>Liste des choses à faire</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 
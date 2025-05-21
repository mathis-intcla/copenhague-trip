export default function AccommodationPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Hébergement à Copenhague</h1>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Steel House Copenhagen</h2>
        <p className="mb-2">Un hébergement moderne et confortable idéalement situé au centre-ville.</p>
        
        <h3 className="font-medium mt-4 mb-2">Avantages</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Prix abordable</li>
          <li>Emplacement central</li>
          <li>Espaces communs conviviaux</li>
          <li>Cuisine partagée</li>
          <li>Wi-Fi gratuit</li>
        </ul>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium">Prix par nuit:</p>
            <p>100€</p>
          </div>
          <div>
            <p className="font-medium">Prix total (7 nuits):</p>
            <p>700€</p>
          </div>
        </div>
        
        <div className="mt-4">
          <a href="https://www.steelhousecopenhagen.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            Visiter le site →
          </a>
        </div>
      </div>
    </div>
  );
} 
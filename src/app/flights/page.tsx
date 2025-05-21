import FlightsContent from './components/FlightsContent';

export default function FlightsPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Vols pour Copenhague</h1>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Vol aller</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Date:</span> 10 août 2025</p>
            <p><span className="font-medium">Départ:</span> 10:25</p>
            <p><span className="font-medium">Numéro de vol:</span> SK1546</p>
            <p><span className="font-medium">Compagnie:</span> SAS Scandinavian Airlines</p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Vol retour</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Date:</span> 17 août 2025</p>
            <p><span className="font-medium">Départ:</span> 18:15</p>
            <p><span className="font-medium">Numéro de vol:</span> SK1547</p>
            <p><span className="font-medium">Compagnie:</span> SAS Scandinavian Airlines</p>
          </div>
        </div>
      </div>
    </div>
  );
} 
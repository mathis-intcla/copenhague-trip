import DiscoveriesContent from './components/DiscoveriesContent';

export default function DiscoveriesPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Découvertes à Copenhague</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Nyhavn</h2>
          <p className="mb-4">Le célèbre port historique de Copenhague avec ses maisons colorées du XVIIe siècle.</p>
          <p className="text-sm text-gray-500">Catégorie: Monuments historiques</p>
          <div className="mt-4">
            <a href="https://www.visitcopenhagen.com/copenhagen/planning/nyhavn-gdk474735" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              En savoir plus →
            </a>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Jardins de Tivoli</h2>
          <p className="mb-4">L'un des plus anciens parcs d'attractions au monde, fondé en 1843.</p>
          <p className="text-sm text-gray-500">Catégorie: Loisirs</p>
          <div className="mt-4">
            <a href="https://www.tivoli.dk/en/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              En savoir plus →
            </a>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">La Petite Sirène</h2>
          <p className="mb-4">L'emblème de Copenhague, cette statue de bronze représente l'héroïne du conte d'Andersen.</p>
          <p className="text-sm text-gray-500">Catégorie: Monuments</p>
          <div className="mt-4">
            <a href="https://www.visitcopenhagen.com/copenhagen/planning/little-mermaid-gdk586951" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              En savoir plus →
            </a>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Christiania</h2>
          <p className="mb-4">La communauté alternative autonome fondée en 1971.</p>
          <p className="text-sm text-gray-500">Catégorie: Culture locale</p>
          <div className="mt-4">
            <a href="https://www.visitcopenhagen.com/copenhagen/planning/christiania-gdk414392" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
              En savoir plus →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 
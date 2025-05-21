export default function TodoPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Liste des choses à faire</h1>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 flex items-center">
            <input type="checkbox" className="mr-3 h-5 w-5" id="task1" />
            <label htmlFor="task1" className="text-lg">Réserver les billets pour Tivoli</label>
          </li>
          <li className="py-3 flex items-center">
            <input type="checkbox" className="mr-3 h-5 w-5" id="task2" />
            <label htmlFor="task2" className="text-lg">Acheter la Copenhagen Card</label>
          </li>
          <li className="py-3 flex items-center">
            <input type="checkbox" className="mr-3 h-5 w-5" id="task3" />
            <label htmlFor="task3" className="text-lg">Vérifier les horaires du musée national</label>
          </li>
          <li className="py-3 flex items-center">
            <input type="checkbox" className="mr-3 h-5 w-5" id="task4" />
            <label htmlFor="task4" className="text-lg">Convertir des euros en couronnes danoises</label>
          </li>
          <li className="py-3 flex items-center">
            <input type="checkbox" className="mr-3 h-5 w-5" id="task5" />
            <label htmlFor="task5" className="text-lg">Faire une liste de restaurants à essayer</label>
          </li>
        </ul>
      </div>
    </div>
  );
} 
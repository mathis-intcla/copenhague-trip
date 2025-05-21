export default function TipsPage() {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-6">Conseils pratiques pour Copenhague</h1>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Transport en ville</h2>
          <p className="mb-4">Copenhague dispose d&apos;un réseau de transport en commun très efficace. Voici quelques conseils :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Achetez la <strong>Copenhagen Card</strong> pour un accès illimité aux transports publics et à plus de 80 attractions</li>
            <li>Louez un vélo ! C&apos;est le mode de transport préféré des locaux</li>
            <li>Le métro automatique fonctionne 24h/24 et 7j/7</li>
            <li>Téléchargez l&apos;application DOT Tickets pour acheter des billets de transport facilement</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Monnaie et paiements</h2>
          <p className="mb-4">Voici ce qu&apos;il faut savoir sur les paiements à Copenhague :</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>La monnaie est la couronne danoise (DKK)</li>
            <li>Presque tous les endroits acceptent les cartes bancaires, même pour de petits montants</li>
            <li>La carte Visa ou Mastercard est largement acceptée</li>
            <li>Il est rarement nécessaire d&apos;avoir du liquide</li>
          </ul>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Applications utiles</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Google Maps</strong> - Pour se repérer</li>
            <li><strong>DOT Tickets</strong> - Pour les billets de transport</li>
            <li><strong>Rejseplanen</strong> - L&apos;application officielle de transport du Danemark</li>
            <li><strong>TooGoodToGo</strong> - Pour récupérer des invendus alimentaires à petit prix</li>
            <li><strong>MobilePay</strong> - L&apos;application de paiement mobile populaire au Danemark</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 
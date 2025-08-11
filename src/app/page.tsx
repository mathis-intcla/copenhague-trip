import HomeContent from './components/HomeContent';
import DiscoveriesContent from './discoveries/components/DiscoveriesContent';

export default function Home() {
  return (
    <div className="space-y-10">
      <HomeContent />
      {/* Aperçu masonry sur la home */}
      <section className="mt-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white px-1">Inspirations récentes</h2>
        <DiscoveriesContent compact />
      </section>
    </div>
  );
}
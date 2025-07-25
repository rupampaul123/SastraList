import Navbar from "../components/navbar";
import Cards from "../components/cards";
import HeroSection from "../components/herosection";

export default function Home({items, setItems}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
        <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Listings</h1>
          <Cards items={items} setItems={setItems} />
      </div>
    </div>
  );
}
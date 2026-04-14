import logements from "../data/logements";
import { useState } from "react";
import CardLogement from "../Components/CardLogement";
import Filter from "../Components/Filter";

import Footer from "../Components/Footer";

function Home() {
  const [ville, setVille] = useState("");
  const [prix, setPrix] = useState("");

  const filtered = logements.filter((l) => {
    return (
      l.ville.toLowerCase().includes(ville.toLowerCase()) &&
      (prix === "" || l.prix <= prix)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">

      {/* Navbar */}
 

      {/* Hero */}
      <div className="bg-white shadow-sm py-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Trouvez votre logement idéal 🏡
        </h1>
        <p className="text-gray-500 mt-2">
          Simple, rapide et moderne
        </p>
      </div>

      {/* Contenu */}
      <div className="p-6 flex-1 max-w-6xl mx-auto w-full">

        {/* Filter Card */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <Filter setVille={setVille} setPrix={setPrix} />
        </div>

        {/* Résultat */}
        <div className="flex justify-between items-center mt-8 mb-4">
          <h2 className="text-xl font-semibold text-gray-700">
            {filtered.length} logement(s) trouvé(s)
          </h2>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.map((log) => (
              <CardLogement key={log.id} logement={log} />
            ))}
          </div>
        ) : (
          // Aucun résultat
          <div className="text-center mt-16">
            <p className="text-gray-500 text-lg">
              Aucun logement trouvé 😢
            </p>
          </div>
        )}

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
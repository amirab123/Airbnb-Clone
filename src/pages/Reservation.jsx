import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logements from "../data/logements";

function Reservation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find(l => l.id == id);

  const [form, setForm] = useState({
    nom: "",
    date: ""
  });

  const [toast, setToast] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);

  // ✅ Sécurité navigation
  useEffect(() => {
    if (!id || !logement) {
      navigate("/");
    }
  }, [id, logement, navigate]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nom || !form.date) {
      showToast("Tous les champs sont obligatoires", "error");
      return;
    }

    showToast(`Réservation confirmée pour logement ${id}`, "success");
    setIsConfirmed(true);
  };

  if (!logement) return null; // 👈 évite affichage bug

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-6 relative">

      {/* Toast */}
      {toast && (
        <div
          className={`absolute top-6 right-6 px-6 py-3 rounded-xl shadow-lg text-white font-medium
          ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
        >
          {toast.message}
        </div>
      )}

      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md border border-gray-100 text-center">

        {!isConfirmed ? (
          <>
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
              🏡 Réservation
            </h2>

            {/* 👇 petit détail UX */}
            <p className="text-gray-500 text-sm mb-4">
              Logement #{id}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">

              <div>
                <label className="text-sm text-gray-600 font-medium">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
                  onChange={(e) =>
                    setForm({ ...form, nom: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="text-sm text-gray-600 font-medium">Date</label>
                <input
                  type="date"
                  className="w-full mt-1 border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400"
                  onChange={(e) =>
                    setForm({ ...form, date: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-xl hover:scale-105 transition font-semibold"
              >
                Confirmer la réservation
              </button>

            </form>
          </>
        ) : (
          // ✅ Message succès
          <div className="flex flex-col items-center space-y-4">

            <div className="text-green-500 text-5xl animate-bounce">✔️</div>

            <h2 className="text-2xl font-bold text-gray-800">
              Réservation confirmée !
            </h2>

            <p className="text-gray-600">
              Merci <span className="font-semibold">{form.nom}</span>, votre réservation
              pour le logement <span className="font-semibold">#{id}</span> est confirmée.
            </p>

            {/* 👇 retour home */}
            <button
              onClick={() => navigate("/")}
              className="mt-4 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition font-semibold"
            >
              Faire une autre réservation
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Reservation;
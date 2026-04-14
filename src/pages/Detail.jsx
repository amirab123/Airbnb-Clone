import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logements from "../data/logements";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logements.find(l => l.id == id);

  // 👇 redirection si vide
  useEffect(() => {
    if (!logement) {
      navigate("/");
    }
  }, [logement, navigate]);

  if (!logement) return null;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-4xl w-full">

        <img
          src={logement.image}
          alt={logement.titre}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">
          <h2 className="text-3xl font-bold">{logement.titre}</h2>
          <p className="text-gray-600 mt-4">{logement.description}</p>
          <p className="text-red-500 text-xl mt-4">{logement.prix}$</p>

          <Link
            to={`/reservation/${logement.id}`}
            className="inline-block mt-6 bg-red-500 text-white px-6 py-3 rounded-xl"
          >
            Réserver
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;
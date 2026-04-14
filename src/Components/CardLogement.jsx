import { Link } from "react-router-dom";

function CardLogement({ logement }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "10px",
      borderRadius: "10px",
      width: "220px"
    }}>
      <img src={logement.image} width="100%" />

      <h3>{logement.titre}</h3>
      <p>{logement.ville}</p>
      <p><strong>{logement.prix}$</strong> / nuit</p>

      <Link to={`/logement/${logement.id}`}>
        Voir détail
      </Link>
    </div>
  );
}

export default CardLogement;
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }) =>
    `relative transition ${
      isActive ? "text-red-500" : "text-gray-700 hover:text-red-500"
    }`;

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm px-8 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* Logo */}
      <NavLink to="/" className="flex items-center gap-2 text-2xl font-extrabold text-red-500">
         Airbnb Clone
      </NavLink>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-8 font-medium">

        <NavLink to="/" className={linkStyle}>
          Accueil
        </NavLink>

        {/* 👉 redirection vers home (liste logements) */}
        <NavLink to="/" className={linkStyle}>
          Logements
        </NavLink>

      </div>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-red-500 text-white px-5 py-2 rounded-xl font-semibold hover:bg-red-600 hover:scale-105 transition hidden md:block"
      >
        Réserver
      </button>

    </nav>
  );
}

export default Navbar;